import { connect } from 'react-redux';
import {
  setDestinataire,
} from '../modules/chat';

export default function mixedConnector() {
  return connect(
    (state) => ({
      destinataire: state.chat.destinataire,
      isConnected: () => state.global.isConnected,
      isLoading: state.global.loading,
      videoMode: state.chat.videoMode,
      messages: state.chat.messages,
      username: () => state.global.username,
    }),
    {
      setDestinataire,
    },
  );
}
