import { connect } from "react-redux";
import { allTodos } from "../../reducers/selectors";
import {TodoList} from "./todo_list"; 

import { receiveTodo } from "../../actions/todo_actions";

const MSTP = state => {
    return {todos: allTodos(state)};
};

const MDTP = dispatch => {
    return {receiveTodo: todo => dispatch(receiveTodo(todo))}; 
}; 

export const TodoListContainer = connect(MSTP, MDTP)(TodoList);