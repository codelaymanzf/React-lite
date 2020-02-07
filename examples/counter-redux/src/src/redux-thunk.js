export default function thunk({ getState }) {
  return dispatch => action => {
    if (typeof action === "function") {
      return action(dispatch);
    } else {
      return dispatch(action);
    }
  };
}
