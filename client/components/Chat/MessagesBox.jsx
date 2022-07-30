import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import { FixedSizeList } from 'react-window';
import PropTypes from 'prop-types';
import chatConnector from '../../redux/connector/chatConnector';
import Message from './Message';
import MessageType from '../../types';

function MessagesBox({
  messages,
}) {
  const getMessagesHeight = () => (window.innerHeight * 65) / 100;
  const renderRow = ({ index, k, style }) => (
    <ListItem button key={k} style={style}>
      <Message message={messages[index]} />
    </ListItem>
  );

  return (
    <FixedSizeList height={getMessagesHeight()} width="100%" itemSize={50} itemCount={messages.length}>
      { renderRow }
    </FixedSizeList>
  );
}

export default chatConnector()(MessagesBox);

MessagesBox.propTypes = {
  messages: PropTypes.arrayOf(MessageType).isRequired,
};
