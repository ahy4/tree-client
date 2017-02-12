import {createStore,  applyMiddleware} from 'redux';
import tweet from '../reducers/tweet';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

export default function configureStore() {
  const logger = createLogger();
  const createStoreWithMiddleware = applyMiddleware(
    thunk, logger
  )(createStore);
  const store = createStoreWithMiddleware(tweet);
  return store;
}

