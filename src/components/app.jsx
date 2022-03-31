import React from 'react';
import MessageList from '../containers/messageList';
import MessageForm from '../containers/messageForm';
import ChannelList from '../containers/channel_list';
import Navbar from './navbar';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <ChannelList />
      <div className="chatroom">
        <MessageList />
        <MessageForm />
      </div>
    </div>
  );
};

export default App;
