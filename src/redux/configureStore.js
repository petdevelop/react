import { createStore, applyMiddleware, compose } from "redux";
import rootReducers from "./reducers";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

const configureStore = initialState => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE_ || compose;

  return createStore(
    rootReducers,
    initialState,
    composeEnhancers(applyMiddleware(reduxImmutableStateInvariant()))
  );
};

export default configureStore;
