import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectChannel } from '../actions';

class ChannelList extends Component {
  renderChannel(channel) {
    return (
      <button
        key={channel}
        className={channel === this.props.selectedChannel ? "active" : ""}
        onClick={() => this.props.selectChannel(channel)}
      >
        {`#${channel}`}
      </button>
    );
  }

  render() {
    const { channels } = this.props;
    return (
      <div className="channel-list">
        <p className="chat-title">Redux Chat</p>
        <div className="channels">
          {channels.map((channel) => {
            return this.renderChannel(channel);
          })}
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectChannel },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    channels: state.channels,
    selectedChannel: state.selectedChannel
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
