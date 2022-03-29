import React from 'react';

const Message = (props) => {
  const { message } = props;

  const time = new Date(message.created_at).toLocaleTimeString('fr-FR');

  return (
    <div>
      <p>
        <strong>{message.author}</strong>
        <small>- {time}</small></p>
      <p>{message.content}</p>
    </div>
  );
};

export default Message;
