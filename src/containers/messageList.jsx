import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchMessages } from '../actions';

import Message from '../components/message';

class MessageList extends Component {
  componentWillMount() {
    this.props.fetchMessages(this.props.selectedChannel);
  }

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
