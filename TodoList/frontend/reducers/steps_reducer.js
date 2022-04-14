import { RECEIVE_STEP } from "../actions/step_actions";
import { RECEIVE_STEPS } from "../actions/step_actions";
import { REMOVE_STEP } from "../actions/step_actions";

const initialState = {
    1: { // this is the step with id = 1
        id: 1,
        title: 'walk to store',
        done: false,
        todo_id: 1
    },
    2: { // this is the step with id = 2
        id: 2,
        title: 'buy soap',
        done: false,
        todo_id: 1
    }
};

export const stepsReducer = (state = initialState, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_STEP:
            newState[action.step.id] = action.step;
            return newState;
        case RECEIVE_STEPS:
            newState = {};
            action.steps.forEach((step) => {
                newState[step.id] = step;
            });
            return newState;
        case REMOVE_STEP:
            delete newState[action.step.id];
            return newState;
        default:
            return state;
    }
};