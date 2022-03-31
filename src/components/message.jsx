import React from 'react';

const Message = (props) => {
  const { message } = props;

  const time = new Date(message.created_at).toLocaleTimeString('fr-FR');

  return (
    <div id={`message-${message.id}`} className="message">
      <p>
        <span className="author">{message.author}</span>
        <span className="timestamp">{` - ${time}`}</span>
      </p>
      <p>{message.content}</p>
    </div>
  );
};

export default Message;
