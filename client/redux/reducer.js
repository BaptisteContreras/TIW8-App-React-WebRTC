import global from './modules/global';
import chat from './modules/chat';

export default function createReducers() {
  return {
    global,
    chat,
  };
}
