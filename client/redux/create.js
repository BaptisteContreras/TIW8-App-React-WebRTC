import {
  createStore, compose, combineReducers, applyMiddleware,
} from 'redux';
import createReducers from './reducer';
import peerMiddleware from './middleware/peerMiddleware';

export default function createAppStore(peer) {
  const finalCreateStore = compose(
    applyMiddleware(peerMiddleware(peer)),
    // eslint-disable-next-line no-underscore-dangle
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (v) => v,
  )(createStore);
  const reducers = createReducers();

  return finalCreateStore(combineReducers({ ...reducers }));
}
