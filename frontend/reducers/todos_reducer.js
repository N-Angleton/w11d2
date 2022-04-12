import { RECEIVE_TODO } from "../actions/todo_actions";
import { RECEIVE_TODOS } from "../actions/todo_actions";
import { REMOVE_TODO } from "../actions/todo_actions";

// const initialState = {
//     1: {
//         id: 1,
//         title: "wash car",
//         body: "with soap",
//         done: false
//     },
//     2: {
//         id: 2,
//         title: "wash dog",
//         body: "with shampoo",
//         done: true
//     }
// };

const initialState = {};

export const todosReducer = (state = initialState, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_TODO:
            newState[action.todo.id] = action.todo;
            return newState;
        case RECEIVE_TODOS:
            newState = {};     
            action.todos.forEach((todo) => {
                newState[todo.id] = todo; 
            }); 
            return newState;
        case REMOVE_TODO:
            delete newState[action.todo.id];
            return newState;
        default:
            return state;
    }
};