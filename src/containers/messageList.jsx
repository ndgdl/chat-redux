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
    this.goToLastMessage();
    setInterval(() => {
      this.fetchMessages();
      this.goToLastMessage();
    }, 5000);
  }

  shouldComponentUpdate(nextProps) {
    return this.props.messages.length !== nextProps.messages.length;
  }

  fetchMessages = () => {
    this.props.fetchMessages(this.props.selectedChannel);
  }

  goToLastMessage = () => {
    const messageList = document.querySelector('.message-list');
    messageList.scroll(0, messageList.scrollHeight);
  }

  renderChannelTitle() {
    const { selectedChannel } = this.props;
    return <h3> Channel #{selectedChannel}</h3>;
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
      <div className="chatroom-content">
        {this.renderChannelTitle()}
        <div className="message-list" ref={this.messageListRef}>
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
