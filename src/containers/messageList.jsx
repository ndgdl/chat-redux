import React, { Component } from 'react';
import { connect } from 'react-redux';

import Message from '../components/message';

class MessageList extends Component {
  renderMessages() {
    const { messages } = this.props;

    return messages.map((message) => {
      return (
        <Message
          message={message}
          key={message.created_at}
        />
      );
    });
  }

  render() {
    return (
      <div className="message-list">
        {this.renderMessages()}
      </div>
    );
  }
}

function MapStateToProps(state) {
  return {
    messages: state.messages
  };
}

export default connect(MapStateToProps)(MessageList);
