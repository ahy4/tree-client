import React, { Component, PropTypes } from 'react';
import TweetList from './tweet-list';

export default class TimelineBox extends Component {
  componentDidMount() {
    this.props.fetchTimeline();
    setTimeout(() => this.props.fetchTimeline(), 3000);
  }

  render() {
    const {tweets} = this.props;
    return (
      <div className="tweetBox">
        <h1>Tweets</h1>
        <TweetList tweets={tweets} />
      </div>
    );
  }
}

TimelineBox.propTypes = {
  tweets: PropTypes.array.isRequired
};
