import { MESSAGE_TYPE, VIDEO_MODE } from '../../peer/types';
import { PEER_ERROR } from './global';

export const SET_DESTINATAIRE = 'tiw8/chat/SET_DESTINATAIRE';
export const ADD_MESSAGE = 'tiw8/chat/ADD_MESSAGE';
export const NONE_ACTION = 'tiw8/chat/NONE_ACTION';
export const SET_VIDEO_MODE = 'tiw8/chat/SET_VIDEO_MODE';

let lastId = 1;
const initialState = {
  destinataire: '',
  messages: [],
  isConnected: false,
  videoMode: false,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_DESTINATAIRE: {
      return {
        ...state,
        destinataire: action.payload,
        messages: [],
      };
    }
    case SET_VIDEO_MODE: {
      return {
        ...state,
        videoMode: action.payload,
      };
    }
    case ADD_MESSAGE: {
      return {
        ...state,
        messages: [...state.messages, action.payload],
        loading: false,
      };
    }
    default:
      return state;
  }
}

/**  See MessageType reference */
export function addMessage(message, me = true) {
  lastId += 1;
  return {
    types: [NONE_ACTION, ADD_MESSAGE, PEER_ERROR],
    peerAction: (peer, payload) => new Promise((resolve) => {
      peer.getDestPeer().send(payload);
      resolve(true);
    }),
    content: {
      type: MESSAGE_TYPE,
      payload: {
        id: lastId,
        text: message,
        me,
      },
    },
  };
}

// LOCAL

/**  See MessageType reference */
export function addMessageLocal(message, me = false) {
  lastId += 1;
  return {
    type: ADD_MESSAGE,
    payload: {
      id: lastId,
      text: message,
      me,
    },

  };
}
export function setDestinataire(destinataire) {
  return {
    type: SET_DESTINATAIRE,
    payload: destinataire,
  };
}

export function setVideoMode(value) {
  return {
    types: [NONE_ACTION, SET_VIDEO_MODE, PEER_ERROR],
    peerAction: (peer, payload) => new Promise((resolve) => {
      peer.getDestPeer().send(payload);
      resolve(true);
    }),
    content: {
      type: VIDEO_MODE,
      payload: value,
    },
  };
}
export function setVideoModeLocal(value) {
  return {
    type: SET_VIDEO_MODE,
    payload: value,
  };
}
