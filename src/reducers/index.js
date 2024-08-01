import { combineReducers } from "redux";
import UserReducer from "./user";
import CommentReducer from "./comment"
import ImageReducer from "./img"
import ThreadsReducer from "./threads"


export default combineReducers({
    UserReducer, CommentReducer, ImageReducer, ThreadsReducer
})