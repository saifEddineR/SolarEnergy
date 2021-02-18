import { createStore, applyMiddleware, compose } from 'redux';
import rootreducer from './reducer';
import thunk from 'redux-thunk';

export default createStore(
  rootreducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
