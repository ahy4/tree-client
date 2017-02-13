import React, { Component, PropTypes } from 'react';
import Tweet from './tweet';

class TweetNode {
  constructor(tweet) {
    this.statusId = tweet.id_str;
    this.content = tweet;
    this.parentId = tweet.in_reply_to_status_id_str; // null or status id
    this.childIds = [];
    this.level = 1;
  }
  addChild(other) {
    other.level = this.level + this.childIds.length;
    this.childIds.push(other.statusId);
    other.parentId = this.statusId;
  }
  findAllChildren(tweetNodes) { // thisの子を探す
    const children = tweetNodes.filter((child) => {
      return ~this.childIds.indexOf(child.statusId) && child.level >= 2;
    });
    if (children.length === 0) return children; // 子がいなくなったら探さない
    const childrenOfChildren = Array.prototype.concat.apply([], // flatten
      children.map((c) => c.findAllChildren(tweetNodes))
    );
    return children.concat(childrenOfChildren); // 子と探されるだろう子たちをマージして返す
  }
  static createTree(tweetNodes) {
    let tws = tweetNodes.concat();

    // とにかく木構造にするため繋げる
    let prev = tws[0];
    tws.forEach((tw, i) => { if (i !== 0) {
      if (tw.parentId !== null) {
        const parent = tws.find((parent) => {
          return tw.parentId === parent.statusId;
        });
        if (typeof parent !== "undefined") {
          // 別の親がいたときはそっちにつく
          parent.addChild(tw);
          return;
        }
      }
      // 特殊な親が居なければ前のやつにくっつく
      prev.addChild(tw);
      prev = tw;
    }});

    // 順番を整理
    let twsClone = tws.concat();
    tws.filter((tw) => { // 枝分かれしてるlevel1
      return tw.childIds.length >= 2 && tw.level == 1;
    }).map((tw) => {
      return [tw].concat(tw.findAllChildren(tws)); // twとその子達をさがす
    }).forEach((tree, i) => {
      const latestIdx = twsClone.map(o => o.statusId).indexOf(tree[tree.length-1].statusId);
      twsClone.splice(latestIdx, 0, tree); // 最新リプの次の要素として木を追加
      twsClone = Array.prototype.concat.apply([], twsClone); // flatten
      tree.forEach((node) => { // もともとあった木の要素を全消し
        const nodeIdx = twsClone.map(o => o.statusId).indexOf(node.statusId);
        twsClone.splice(nodeIdx, 1);
      });
    });

    return twsClone;
  }
}

export default class TweetList extends Component {
  render() {
    const tws = TweetNode.createTree(this.props.tweets.map((tw) => new TweetNode(tw)).reverse());
    console.log(tws);
    const tweetComponents = tws.map((tw, idx) => {
      return (
        <Tweet tweetNode={tw} key={`TweetComponent: ${idx}`} idx={idx} />
      );
    });
    return (
      <div className="tweetList">
        {tweetComponents}
      </div>
    );
  }
}

TweetList.propTypes = {
  tweets: PropTypes.array.isRequired
};
