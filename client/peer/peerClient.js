import Peer from 'peerjs';
import { setLoading } from '../redux/modules/global';
import bindGeneralLogic from './modules/general/generalPeerEvents';
import bindReceiveData from './modules/chat/chatPeerEvents';

class PeerClient {
  constructor() {
    this.instance = null;
    this.dest = null;
    this.store = null;
  }

  createPeerClient(id) {
    this.disconnect();
    this.instance = new Peer(id, {
      host: window.location.hostname,
      port: window.location.port,
      path: '/mypeer',
    });

    bindGeneralLogic(this.instance, this.store, this);
    return this.instance;
  }

  getPeerInstance() {
    return this.instance;
  }

  disconnect() {
    if (this.instance) {
      this.instance.destroy();
    }
    if (this.dest) {
      this.dest.close();
    }
    this.instance = null;
    this.dest = null;
  }

  connectTo(myId, destinataire) {
    const conn = this.createPeerClient(myId).connect(destinataire);
    this.setDestinatairePeer(conn);
    bindReceiveData(conn, this.store, this);
    this.store.dispatch(setLoading(true));
  }

  setDestinatairePeer(destPeer) {
    this.dest = destPeer;
  }

  getDestPeer() {
    return this.dest;
  }

  setStore(store) {
    this.store = store;
  }
}

export default new PeerClient();
