import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import menuReducer from './store/reducers/menuReducer';
import ordersReducer from './store/reducers/ordersReducer';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';

const rootReducer = combineReducers({
  menu: menuReducer,
  orders: ordersReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware),
);

const app = (
  <Provider store={store}>
    <App />
  </Provider>

);

ReactDOM.render(
  app,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
