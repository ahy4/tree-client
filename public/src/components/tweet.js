import React, { Component, PropTypes } from 'react';

export default class Tweet extends Component {
  render() {
    return (
      <div className="tweet">
        <h2 className="tweetUserName">
          {this.props.tweetNode.content.user.name}
        </h2>
        <p>
          {this.props.idx}: {this.props.tweetNode.content.text}
        </p>
      </div>
    );
  }
}

Tweet.propTypes = {
  idx: PropTypes.number.isRequired,
  tweetNode: PropTypes.any.isRequired
};
