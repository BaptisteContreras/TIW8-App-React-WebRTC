export const SET_USERNAME = 'tiw8/global/SET_USERNAME';
export const SET_PEER_ID = 'tiw8/global/SET_PEER_ID';
export const SET_CONNECTED = 'tiw8/chat/SET_CONNECTED';
export const LOADING = 'tiw8/chat/LOADING';
export const PEER_ERROR = 'tiw8/chat/PEER_ERROR';

const initialState = {
  username: null,
  peerId: null,
  loading: false,
  peerError: false,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_USERNAME: {
      return {
        ...state,
        username: action.payload,
        peerError: false,
      };
    }
    case SET_PEER_ID: {
      return {
        ...state,
        peerId: action.payload,
        peerError: false,
      };
    }
    case SET_CONNECTED: {
      return {
        ...state,
        isConnected: action.payload,
        loading: false,
      };
    }
    case LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    case PEER_ERROR: {
      return {
        ...state,
        loading: false,
        peerError: action.payload,
      };
    }
    default:
      return state;
  }
}
export function setLoading(loading) {
  return {
    type: LOADING,
    payload: loading,
  };
}

export function setUsername(username) {
  return {
    type: SET_USERNAME,
    payload: username,
  };
}
export function setPeerId(peerId) {
  return {
    type: SET_PEER_ID,
    payload: peerId,
  };
}
export function disconnectChat() {
  return {
    types: [LOADING, SET_CONNECTED, PEER_ERROR],
    peerAction: (peer) => new Promise((resolve) => {
      peer.disconnect();
      resolve(true);
    }),
    content: false,
  };
}
export function setConnected(statut) {
  return {
    type: SET_CONNECTED,
    payload: statut,
  };
}
export function setPeerError(hasError) {
  return {
    type: PEER_ERROR,
    payload: hasError,
  };
}
