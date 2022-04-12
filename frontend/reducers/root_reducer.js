import { combineReducers } from "redux";
import { stepsReducer } from "./steps_reducer";
import { todosReducer } from "./todos_reducer";

export const rootReducer = combineReducers({
    todos: todosReducer,
    steps: stepsReducer
}); 



