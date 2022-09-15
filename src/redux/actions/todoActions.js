import { ActionTypes } from "../constants/actionTypes";

export const setTodos = (todos) => {
    return {
        type: ActionTypes.SET_TODOS,
        payload: {data:todos},
    };
};

export const selectedUser = (user) => {
    return {
        type: ActionTypes.SELECTED_USER,
        payload: {data:user},
    }
}