import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { boardReducer } from "../reducer";
import { AppActions } from "../shared/types";

export const rootReducer = combineReducers({
  boards: boardReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default createStore(
  rootReducer,
  applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>)
);
