import {fetch, fetch2, save} from '../lib/tweet-api-driver';

export const RECEIVE_TIMELINE = 'RECEIVE_TIMELINE';

export function recieveTimeline(tweets) {
  return {
    type: RECEIVE_TIMELINE,
    tweets
  };
}

export function fetchTimeline() {
  return dispatch => {
    fetch("/api/statuses/home_timeline", { count:200 })
      .then((tweets) => {
        dispatch(recieveTimeline(tweets));
      }).catch((error) => {
        console.error(error);
      });
  };
}
