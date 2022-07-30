import React, { useEffect, useRef } from 'react';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import CallEndIcon from '@material-ui/icons/CallEnd';
import PropTypes from 'prop-types';
import chatConnector from '../../redux/connector/chatConnector';
import sendAndReceiveVideo from '../../peer/modules/video/videoPeerEvents';

function VideoContainer({ setVideoMode }) {
  const videoRef = useRef(null);
  let endVideoAfterPromise = null;
  const endVideoCall = () => {
    setVideoMode(false);
    endVideoAfterPromise();
  };

  useEffect(() => {
    sendAndReceiveVideo((mediaStream) => {
      videoRef.current.srcObject = mediaStream;
      videoRef.current.play();
    }).then((endCall) => {
      endVideoAfterPromise = () => {
        endCall();
      };
    });
  });

  return (
    <Grid item xs={12}>
      <video width="100%" ref={videoRef} playsInline>
        <track kind="captions" />
      </video>
      <Grid container justify="center">
        <IconButton onClick={endVideoCall}>
          <CallEndIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
}

export default chatConnector()(VideoContainer);

VideoContainer.propTypes = {
  setVideoMode: PropTypes.func.isRequired,
};
