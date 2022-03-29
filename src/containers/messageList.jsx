import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchMessages } from '../actions';

import Message from '../components/message';

class MessageList extends Component {
  componentWillMount() {
    this.fetchMessages();
  }

  componentDidMount() {
    setInterval(() => {
      this.fetchMessages();
    }, 5000);
  }

  fetchMessages = () => {
    this.props.fetchMessages(this.props.selectedChannel);
  }

  renderChannelTitle() {
    const { selectedChannel } = this.props;
    return <h3>{selectedChannel[0].toUpperCase() + selectedChannel.slice(1)}</h3>;
  }

  renderMessages() {
    const { messages } = this.props;
    return messages.map((message) => {
      return (
        <Message
          key={message.id}
          message={message}
        />
      );
    });
  }

  render() {
    return (
      <div className="chatroom">
        {this.renderChannelTitle()}
        <div className="message-list">
          {this.renderMessages()}
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchMessages },
    dispatch
  );
}

function MapStateToProps(state) {
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel
  };
}

export default connect(MapStateToProps, mapDispatchToProps)(MessageList);
