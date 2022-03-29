// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// State and reducers
import channelsReducer from './reducers/channels_reducer';
import selectedChannelReducer from './reducers/selected_channel_reducer';
import messagesReducer from './reducers/messages_reducer';
import currentUserReducer from './reducers/current_user_reducer';

const reducers = combineReducers({
  channels: channelsReducer,
  selectedChannel: selectedChannelReducer,
  messages: messagesReducer,
  currentUser: currentUserReducer
});

const initialState = {
  channels: ['general', 'react', 'paris'],
  selectedChannel: 'general',
  messages: [
    {
      id: 1,
      author: "anonymous92",
      content: "Hello world!",
      created_at: "2017-09-26T23:03:16.365Z"
    },
    {
      id: 2,
      author: "anonymous77",
      content: "My name is anonymous77",
      created_at: "2017-09-26T23:03:21.194Z"
    }
  ],
  currentUser: window.prompt("What is your username?") || `anonymous${Math.floor(10 + (Math.random() * 90))}`,
};

// render an instance of the component in the DOM
const middlewares = applyMiddleware(reduxPromise, logger);

ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
