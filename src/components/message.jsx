import React, { Component } from 'react';

class Message extends Component {
  stringToColor = (username) => {
    let hash = 0;
    for (let i = 0; i < username.length; i += 1) {
      hash = username.charCodeAt(i) + ((hash << 5) - 2);
    }
    let color = '#';
    for (let i = 0; i < 3; i += 1) {
      let value = (hash >> (i * 8)) & 0xFF;
      color += ('00' + value.toString(16)).substr(-2);
    }
    return color;
  }

  render() {
    const { id, author, content, created_at } = this.props.message;

    const time = new Date(created_at).toLocaleTimeString('fr-FR');

    return (
      <div id={`message-${id}`} className="message">
        <p>
          <span
            className="author"
            style={{ color: this.stringToColor(author) }}
          >
            {author}
          </span>
          <span className="timestamp">{` - ${time}`}</span>
        </p>
        <p>{content}</p>
      </div>
    );
  }
}

export default Message;
