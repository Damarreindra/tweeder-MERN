import { GET_COMMENTS, ADD_COMMENT } from "../../actions/userAction"

const initialState = {
    getCommentsResult: false,
    getCommentsLoading: false,
    getCommentsError: false,

    addCommentLoading: false,
    addCommentError: false,
    addCommentResult: false,
}

const comments = (state = initialState, action) =>{
    switch(action.type){

        case GET_COMMENTS:
           
            return{
                ...state,
                getCommentsResult: action.payload.data,
                getCommentsLoading: action.payload.loading,
                getCommentsError: action.payload.errorMessage,
            } 

            case ADD_COMMENT:
           
            return{
                ...state,
                addCommentResult: action.payload.data,
                addCommentLoading: action.payload.loading,
                addCommentError: action.payload.errorMessage,
            } 
        default : 
        return state
    }
}

export default comments