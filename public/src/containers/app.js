import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TimelineBox from '../components/timeline-box';
import * as timelineActions from '../actions/timeline';

function mapStateToProps(state)  {
  return {
    tweets: state.tweets
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(timelineActions, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TimelineBox);



