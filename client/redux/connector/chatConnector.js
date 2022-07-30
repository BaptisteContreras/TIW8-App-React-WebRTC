import { connect } from 'react-redux';
import {
  setDestinataire,
  addMessage,
  setVideoMode,
} from '../modules/chat';

export default function chatConnector() {
  return connect(
    (state) => ({
      destinataire: state.chat.destinataire,
      isConnected: () => state.global.isConnected,
      username: () => state.global.username,
      videoMode: state.chat.videoMode,
      messages: state.chat.messages,
    }),
    {
      addMessage,
      setDestinataire,
      setVideoMode,
    },
  );
}
