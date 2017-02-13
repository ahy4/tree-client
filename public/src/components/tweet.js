import React, { Component, PropTypes } from 'react';
import TweetIconBox from './tweet-icon-box';

export default class Tweet extends Component {
  render() {
    const profileImg = this.props.tweetNode.content.user.profile_image_url_https;
    const level = this.props.tweetNode.level;
    const parentChildCount = this.props.parentChildCount; // 親の持っている子の個数
    const childCount = this.props.tweetNode.childIds.length;
    const hasParent = !!this.props.tweetNode.parentId;
    const text = this.props.tweetNode.content.text;

    let thumbDirs = {};
    if (hasParent) thumbDirs.top = true;
    if (childCount >= 1) thumbDirs.bottom = true;
    if (childCount >= 2) thumbDirs.right = true;
    const leftStraightCount = level - 1;
    const rightCurveCount = childCount >= 2 ? 1 : 0;
    const rightTridentCount = Math.min(childCount - 2, 0);
    // const rightStraightCount = parentChildCount
    // const rightCrossedCount = ...

    return (
      <div className="tweet">
        {[
          Array.from({length:leftStraightCount}, (_, i) => 
            <TweetIconBox imgSrc="/assets/images/tweet-icon-line-straight.png" directions={{top:true,bottom:true}}/>
          ),
          <TweetIconBox imgSrc={profileImg} directions={thumbDirs}/>,
          Array.from({length:rightTridentCount}, (_, i) =>
            <TweetIconBox imgSrc="/assets/images/tweet-icon-line-trident.png" directions={{left:true,right:true,bottom:true}}/>
          ),
          Array.from({length:rightCurveCount}, (_, i) => 
            <TweetIconBox imgSrc="/assets/images/tweet-icon-line-curve.png" directions={{left:true,bottom:true}}/>
          ),
          <div className="tweet-content">
            <p>{text}</p>
          </div>
        ]}
      </div>
    );
  }
}

Tweet.propTypes = {
  idx: PropTypes.number.isRequired,
  parentChildCount: PropTypes.number.isRequired,
  tweetNode: PropTypes.any.isRequired
};
