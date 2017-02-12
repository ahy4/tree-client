import * as timelineActions from '../actions/timeline';

export default function tweet(state={tweets: []}, action) {
  switch(action.type){
    case timelineActions.RECEIVE_TIMELINE:
      return {
        tweets: action.tweets
      };
    default:
      return state;
  }
}
