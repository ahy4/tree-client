import React, { Component, PropTypes } from 'react';
import Tweet from './tweet';

export default class TweetList extends Component {
  render() {
    const tweetNodes = this.props.tweets.map((tweet, idx) => {
      return (
        <Tweet userName={tweet.user.name} key={idx}>
          {tweet.text}
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
