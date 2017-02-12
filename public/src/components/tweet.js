import React, { Component, PropTypes } from 'react';

export default class Tweet extends Component {
  rawMarkup() {
    let rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return { __html: rawMarkup };
  }
  render() {
    return (
      <div className="tweet">
        <h2 className="tweetUserName">
          {this.props.userName}
        </h2>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    );
  }
}

Tweet.propTypes = {
  userName: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};
