import React from "react"; 
import { TodoListItem } from "./todo_list_item";


export function TodoList({receiveTodo, todos}) {
    return (
        <ul>
            {todos.map( todo => <TodoListItem todo={todo}/>)}
        </ul>
    )
}