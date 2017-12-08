import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import rootReducer from './reducers';
// import screenTracking from './middlewares/screenTracking';

// const middlewares = [thunk, screenTracking];
const middlewares = [];
// if (__DEV__) {
//   middlewares.push(logger);
// }

export default function () {
  return createStore(
    rootReducer,
    applyMiddleware(...middlewares),
  );
}
