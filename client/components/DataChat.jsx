import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import MessageInput from './Chat/MessageInput';
import MessagesBox from './Chat/MessagesBox';
import DestinataireBox from './Chat/DestinataireBox';
import mixedConnector from '../redux/connector/mixedConnector';
import Loader from './Loader';
import VideoContainer from './Video/VideoContainer';

function DataChat({ isConnected, isLoading, videoMode }) {
  const renderChat = () => {
    if (isLoading) {
      return (
        <Grid
          style={{ 'margin-top': '20px' }}
          item
          xs={12}
          sm={12}
          md={10}
          lg={10}
        >
          <Loader />
        </Grid>
      );
    }

    if (!isConnected()) {
      return (
        <Grid
          style={{ 'margin-top': '20px' }}
          item
          xs={12}
          sm={12}
          md={10}
          lg={10}
        />
      );
    }

    return !videoMode
      ? (
        <Grid
          style={{ 'margin-top': '20px' }}
          item
          xs={12}
          sm={12}
          md={10}
          lg={10}
        >
          <MessagesBox />
          <MessageInput />
        </Grid>
      )
      : (
        <Grid
          style={{ 'margin-top': '20px' }}
          item
          xs={12}
          sm={12}
          md={10}
          lg={10}
        >
          <VideoContainer />
        </Grid>
      );
  };

  return (
    <Grid
      container
    >
      <Grid
        item
        xs={12}
        sm={12}
        md={4}
        lg={3}
      >
        <DestinataireBox />
      </Grid>
      { renderChat()}
    </Grid>

  );
}

export default mixedConnector()(DataChat);

DataChat.propTypes = {
  isConnected: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  videoMode: PropTypes.bool.isRequired,
};
