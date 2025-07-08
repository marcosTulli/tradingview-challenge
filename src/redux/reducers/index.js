import { combineReducers } from "redux";
import tokenReducer from "./tokenReducer";
import swapTransactionReducer from "./fetchSwapTransactionReducer";
import displayTokenData from "./displayTokenData";

const rootReducer = combineReducers({
  tokenReducer, // Add your reducers here
  swapTransactionReducer,
  displayTokenData,
});

export default rootReducer;
