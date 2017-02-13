import React, { Component, PropTypes } from 'react';

export default class TweetIconBox extends Component {
  render() {
    const selectorName = "tweet-icon-hands-" + Object.keys(this.props.directions).filter((key) => {
      return this.props.directions[key];
    }).sort().join('-'); // ex. tweet-icon-hands-bottom-left-top
    const className = `tweet-icon-box ${selectorName}`;
    return (
      <div className={className}>
        <img src={this.props.imgSrc} alt=""/>
      </div>
    );
  }
}

TweetIconBox.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  directions: PropTypes.shape({
    bottom: React.PropTypes.bool,
    left: React.PropTypes.bool,
    right: React.PropTypes.bool,
    top: React.PropTypes.bool,
  })
};
