export default function clientMiddleware(peer) {
  return ({
    dispatch,
    getState,
  }) => (next) => (action) => {
    if (typeof action === 'function') {
      return action(dispatch, getState);
    }

    const { peerAction, types, content } = action;
    if (!peerAction) {
      return next(action);
    }

    const [LOAD, SUCCESS, FAILURE] = types;
    next({
      payload: content.payload,
      type: LOAD,
    });

    const actionPromise = peerAction(peer, content);
    actionPromise
      .then(() => next({ payload: content.payload, type: SUCCESS }), (error) => {
        next({ payload: content.payload, error, type: FAILURE });
      })
      .catch((error) => {
        next({ payload: content.payload, error, type: FAILURE });
      });

    return actionPromise;
  };
}
