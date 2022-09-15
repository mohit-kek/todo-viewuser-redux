import { combineReducers } from "redux";
import { todoReducer,viewUserReducer } from "./todoReducer";

const reducers = combineReducers({
    allTodos: todoReducer,
    user: viewUserReducer,

})

export default reducers; 