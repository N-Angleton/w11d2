import  {fetchTodos}  from '../util/todo_api_util';

export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

export const receiveTodos = todos => {
    return {
        type: RECEIVE_TODOS,
        todos
    };
};

export const receiveTodo = todo => {
    return {
        type: RECEIVE_TODO,
        todo
    };
};

export const removeTodo = todo => {
    return {
        type: REMOVE_TODO,
        todo
    };
};

export function fetchTodos1() {
    return function(dispatch){
        return fetchTodos().then((res) => {
            return dispatch(receiveTodos(res));
        });
    }
}; 

