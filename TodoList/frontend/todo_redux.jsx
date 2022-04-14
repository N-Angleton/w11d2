import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from './store/store';
import { Root } from './components/root';

import { fetchTodos1, receiveTodo } from './actions/todo_actions';
import { receiveTodos } from './actions/todo_actions';
import { removeTodo } from './actions/todo_actions';

import { receiveStep } from './actions/step_actions';
import { receiveSteps } from './actions/step_actions';
import { removeStep } from './actions/step_actions';

import { allTodos } from './reducers/selectors';

// import { fetchTodos } from './util/todo_api_util';



document.addEventListener('DOMContentLoaded', (event) => {
    const root = document.getElementById('root');
    const store = configureStore(); 
    window.store = store;
    window.allTodos = allTodos;
    window.fetchTodos1 = fetchTodos1;

    window.receiveTodo = receiveTodo;
    window.receiveTodos = receiveTodos;
    window.removeTodo = removeTodo;

    window.receiveStep = receiveStep;
    window.receiveSteps = receiveSteps;
    window.removeStep = removeStep;

    ReactDOM.render(<Root store={store}/>, root);
})
