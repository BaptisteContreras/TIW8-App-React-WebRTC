import PeerClient from '../../peerClient';

const getMediaStream = () => new Promise((success, error) => {
  const getUserMedia = navigator.getUserMedia
    || navigator.webkitGetUserMedia
    || navigator.mozGetUserMedia;
  getUserMedia({
    video: true,
    audio: true,
  }, success, error);
});

const closeMediaStream = (mediaStream) => {
  mediaStream.getTracks().forEach((track) => {
    track.stop();
  });
};

export default (receiveVideoStream) => new Promise((success, reject) => {
  if (PeerClient.getPeerInstance().id < PeerClient.getDestPeer().peer) {
    getMediaStream()
      .then((mediaStream) => {
        const call = PeerClient.getPeerInstance()
          .call(PeerClient.getDestPeer().peer, mediaStream);
        call.on('stream', (remoteStream) => {
          receiveVideoStream(remoteStream);
        });
        call.on('close', () => closeMediaStream(mediaStream));
        success(() => {
          call.close();
        });
      }).catch(reject);
  } else {
    PeerClient.getPeerInstance()
      .on('call', (call) => {
        getMediaStream()
          .then((mediaStream) => {
            call.answer(mediaStream);
            call.on('stream', receiveVideoStream);
            success(() => {
              call.close();
            });
            // eslint-disable-next-line no-param-reassign
            call.peerConnection.onconnectionstatechange = (event) => {
              if (event.currentTarget.connectionState === 'disconnected') {
                closeMediaStream(mediaStream);
              }
            };
          }).catch(reject);
      });
  }
});
