import { connect } from 'react-redux';
import {
  setPeerId,
  setUsername,
} from '../modules/global';

export default function globalConnector() {
  return connect(
    (state) => ({
      username: () => state.global.username,
      loading: state.global.loading,
      isConnected: () => state.global.isConnected,
      peerId: () => state.global.peerId,
    }),
    {
      setPeerId,
      setUsername,
    },
  );
}
