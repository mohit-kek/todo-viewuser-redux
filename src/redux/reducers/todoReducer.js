import { ActionTypes } from "../constants/actionTypes";

const initialState = {
    todos: [],
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_TODOS:
            const { data } = action.payload;
            return {
                ...state,
                todos: data,
            };
        default:
            return state;
    }
}

export const viewUserReducer = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.SELECTED_USER:
            const { data } = action.payload
            
            return {
                ...state,
                user: data,
            };
        default:
            return state;
    }
}