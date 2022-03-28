import React from 'react';

const Message = (props) => {
  const { message } = props;
  return (
    <div>
      <strong>{message.author}</strong>
      <p>{message.content}</p>
    </div>
  );
};

export default Message;
