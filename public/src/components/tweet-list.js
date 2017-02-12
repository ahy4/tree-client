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
}

export default class TweetList extends Component {
  render() {
    console.log("tweets:");
    const tweets = this.props.tweets;
    // console.log(JSON.stringify(tweets,null,"  "));
    const tws = tweets.map((tw) => new TweetNode(tw));
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
    console.log(tws);

    const tweetNodes = tweets.map((tweet, idx) => {
      return (
        <Tweet userName={tweet.user.name} key={idx}>
          {idx+": "+tweet.text}
        </Tweet>
      );
    });
    return (
      <div className="tweetList">
        {tweetNodes}
      </div>
    );
  }
}

TweetList.propTypes = {
  tweets: PropTypes.array.isRequired
};
