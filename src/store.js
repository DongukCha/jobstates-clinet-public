import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import ReduxThunk from 'redux-thunk';
import Reducers from './reducers';

/* eslint-disable no-underscore-dangle */
const store = history =>
  createStore(
    Reducers(history),
    compose(applyMiddleware(routerMiddleware(history), ReduxThunk)),
  );

export default store;
