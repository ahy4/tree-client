import {fetch2, save} from '../lib/tweet-api-driver';

export const RECEIVE_TIMELINE = 'RECEIVE_TIMELINE';

export function recieveTimeline(tweets) {
  console.log("tweets",tweets)
  return {
    type: RECEIVE_TIMELINE,
    tweets
  };
}

export function fetchTimeline() {
  return dispatch => {
    fetch2("/api/statuses/home_timeline")
      .then((tweets) => {
        dispatch(recieveTimeline(tweets));
      }).catch((error) => {
        console.error(error);
      });
  };
}
