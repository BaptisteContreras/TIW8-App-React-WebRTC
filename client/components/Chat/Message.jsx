import React from 'react';
import Chip from '@material-ui/core/Chip';
import MessageType from '../../types';

function Message({ message }) {
  const applyStyle = () => (message.me === true ? {
    position: 'absolute', top: '0', right: '0', height: '50',
  } : {});
  return (
    <Chip style={applyStyle()} key={message.id} label={message.text} />
  );
}

export default Message;

Message.propTypes = {
  message: MessageType.isRequired,
};
