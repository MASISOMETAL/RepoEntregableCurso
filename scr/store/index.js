import { createStore, combineReducers } from "redux";
import PromosReducer from "./reducers/promosReducers";

const rootReducer = combineReducers({
    PromosReducers: PromosReducer,
});

export default createStore(rootReducer);