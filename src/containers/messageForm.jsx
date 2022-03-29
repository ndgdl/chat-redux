import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { createMessage } from '../actions';


class MessageForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ''
    };
  }

  handleChange = (event) => {
    this.setState({ message: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { selectedChannel, currentUser } = this.props;
    this.props.createMessage(selectedChannel, currentUser, this.state.message);
    this.setState({ message: '' });
  }

  render() {
    return (
      <div className="message-form">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.message}
            placeholder="Put your message here!"
            onChange={this.handleChange}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { createMessage },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    selectedChannel: state.selectedChannel,
    currentUser: state.currentUser
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
