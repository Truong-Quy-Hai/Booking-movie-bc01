import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { phimReducer } from "./reducers/phimReducer";
import { loadingReducer } from "./reducers/loadingReducer";
import reduxThunk from "redux-thunk";

const rootReducer = combineReducers({
  phimReducer,
  loadingReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(reduxThunk))
);
// apply thunk to modify dispatch which has api
export { store };
