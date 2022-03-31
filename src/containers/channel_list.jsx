import React, { Component } from 'react';

class ChannelList extends Component {
  render() {
    return (
      <div className="channel-list">
        <p className="chat-title">Redux Chat</p>
        <div className="channels">
          <button>#general</button>
          <button>#react</button>
          <button>#paris</button>
        </div>
      </div>
    );
  }
}

export default ChannelList;
