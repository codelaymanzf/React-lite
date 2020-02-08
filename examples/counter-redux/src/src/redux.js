export function createStore(reducer, enhancer) {
  if (enhancer) {
    return enhancer(createStore)(reducer);
  }

  let currentState = undefined;
  let currentListeners = [];

  function getState() {
    return currentState;
  }

  function subscribe(listener) {
    currentListeners.push(listener);
  }

  function dispatch(action) {
    currentState = reducer(currentState, action);

    currentListeners.forEach(v => v());

    return action;
  }

  dispatch({
    type: "@redux/INIT"
  });

  return {
    getState,
    subscribe,
    dispatch
  };
}

export function applyMiddleware(...middlewares) {
  return createStore => (...args) => {
    const store = createStore(...args);

    let dispatch = store.dispatch;

    const midApi = {
      getState: store.getState,
      dispatch
    };
    console.log("middlewares", middlewares);
    // f thunk({getState}) f logger()
    const middleChain = middlewares.map(mv => mv(midApi));
    console.log("middleChain", middleChain);
    // dispatch => {} dispatch => {}
    // thunk({getState, dispatch}) logger({getState, dispatch})
    dispatch = compose(...middleChain)(dispatch);
    console.log("compose", dispatch);

    return {
      ...store,
      dispatch
    };
  };
}

export function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg;
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce((a, b) => (...args) => a(b(...args)));
}
