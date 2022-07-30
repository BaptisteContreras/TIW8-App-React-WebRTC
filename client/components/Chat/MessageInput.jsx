import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import PhoneIcon from '@material-ui/icons/Phone';
import { Send } from '@material-ui/icons';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import chatConnector from '../../redux/connector/chatConnector';

function MessageInput({ addMessage, setVideoMode }) {
  const textFieldRef = useRef('');

  const sendMessage = () => {
    if (textFieldRef.current.value) {
      addMessage(textFieldRef.current.value);
      textFieldRef.current.value = '';
    }
  };

  const handleEnter = (event) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  };

  const callDestinataire = () => {
    setVideoMode(true);
  };

  return (
    <Grid
      container
    >
      <Grid
        item
        xs={2}
        sm={1}
      >
        <IconButton onClick={callDestinataire}>
          <PhoneIcon />
        </IconButton>
      </Grid>
      <Grid
        item
        xs={10}
        sm={11}
      >
        <Input
          fullWidth
          inputRef={textFieldRef}
          onKeyPress={handleEnter}
          endAdornment={(
            <InputAdornment position="end">
              <IconButton
                onClick={sendMessage}
                aria-label="Envoyer le message"
              >
                <Send />
              </IconButton>
            </InputAdornment>
          )}
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={1}
        lg={1}
      />
    </Grid>

  );
}

export default chatConnector()(MessageInput);

MessageInput.propTypes = {
  addMessage: PropTypes.func.isRequired,
  setVideoMode: PropTypes.func.isRequired,
};
