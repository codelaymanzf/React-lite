export default function logger() {
  return dispatch => action => {
    console.log(action.type + " has executed");

    return dispatch(action);
  };
}
