import React, { useState, useContext, useEffect } from "react";

const Context = React.createContext();

export function Provider({ store, children }) {
  return <Context.Provider value={store}>{children}</Context.Provider>;
}

export const connect = (
  mapStateToProps = state => state,
  mapDispatchToProps = {}
) => Cmp => props => {
  const store = useContext(Context);
  const getMoreProps = () => {
    const stateProps = mapStateToProps(store.getState());
    const dispatchProps = bindActionCreators(
      mapDispatchToProps,
      store.dispatch
    );

    return {
      ...stateProps,
      ...dispatchProps
    };
  };

  const [moreProps, setMoreProps] = useState(getMoreProps());

  useEffect(() => {
    store.subscribe(() => {
      setMoreProps({ ...moreProps, ...getMoreProps() });
    });
  });

  return <Cmp {...props} {...moreProps} />;
};

function bindActionCreator(creator, dispatch) {
  return (...args) => dispatch(creator(...args));
}

function bindActionCreators(actionCreators, dispatch) {
  const actions = {};
  for (const key in actionCreators) {
    actions[key] = bindActionCreator(actionCreators[key], dispatch);
  }

  return actions;
}
