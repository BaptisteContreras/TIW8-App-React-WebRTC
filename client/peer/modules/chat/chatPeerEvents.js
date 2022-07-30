import { addMessageLocal, setVideoModeLocal } from '../../../redux/modules/chat';
import { setConnected, disconnectChat } from '../../../redux/modules/global';
import { MESSAGE_TYPE, VIDEO_MODE } from '../../types';

export default function bindReceiveData(conn, store, peerClient) {
  peerClient.setDestinatairePeer(conn);
  conn.on('data', (data) => {
    switch (data.type) {
      case MESSAGE_TYPE:
        store.dispatch(addMessageLocal(data.payload.text, false));
        break;
      case VIDEO_MODE: {
        store.dispatch(setVideoModeLocal(data.payload));
        break;
      }
      default: break;
    }
  });

  conn.on('open', () => {
    store.dispatch(setConnected(true));
  });

  conn.on('close', () => {
    store.dispatch(disconnectChat());
  });
}
