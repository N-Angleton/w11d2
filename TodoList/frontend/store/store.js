import { applyMiddleware, createStore } from "redux";
import { thunk } from "../middleware/thunk";
import { rootReducer } from "../reducers/root_reducer"; 

export function configureStore() { 
    return createStore(rootReducer, applyMiddleware(thunk));
}