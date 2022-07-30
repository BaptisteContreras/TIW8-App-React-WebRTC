import { setPeerId, setConnected, setPeerError } from '../../../redux/modules/global';
import bindReceiveData from '../chat/chatPeerEvents';

export default function bindLogic(peer, store, peerClient) {
  peer.on('open', (id) => {
    store.dispatch(setPeerId(id));
  });

  peer.on('connection', (conn) => {
    if (conn.peer === store.getState().chat.destinataire) {
      bindReceiveData(conn, store, peerClient);
    } else {
      conn.close();
    }
  });
  peer.on('disconnected', () => {
    store.dispatch(setConnected(false));
  });
  peer.on('error', () => {
    store.dispatch(setPeerError(true));
  });
}
