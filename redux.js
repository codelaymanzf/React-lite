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

    const middleChain = middlewares.map(mv => mv(midApi));
    dispatch = compose(...middleChain)(dispatch);

    return {
      ...store,
      dispatch
    };
  };
}

export function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => args;
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce((a, b) => (...args) => a(b(...args)));
}
