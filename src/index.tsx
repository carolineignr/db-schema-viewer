import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import './index.scss';
import App from './App';
import { schemaReducer } from './store/reducers/schemaReducer';

const initialState = {
  schemas: [],
  inputParams: {
    host: '',
    database: '',
    user: '',
    password: '',
  },
  loading: false,
  databaseModalOpen: false,
};
const store = createStore(schemaReducer, initialState, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
