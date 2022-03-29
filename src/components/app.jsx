import React from 'react';
import MessageList from '../containers/messageList';
import MessageForm from '../containers/messageForm';

const App = () => {
  return (
    <div className="app">
      <MessageList />
      <MessageForm />
    </div>
  );
};

export default App;
