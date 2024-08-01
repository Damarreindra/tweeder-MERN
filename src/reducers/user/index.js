import { GET_LIST_USER, ADD_USER, ADD_POST, LOGOUT, GET_CURRENT_USER, UPDATE_PUBLISH, UNPUBLISH, ADD_POST_PROFILE } from "../../actions/userAction"
const initialState = {
    getListUserResult: false,
    getListUserLoading: false,
    getListUserError: false,

    addUserResult: false,
    addUserLoading: false,
    addUserError: false,

    addPostResult: false,
    addPostLoading: false,
    addPostError: false,

    addPostProfileResult: false,
    addPostProfileLoading: false,
    addPostProfileError: false,

    getCurrentUserResult : false,

    LogoutResult: false,

    updatePublishResult: false,
    updatePublishLoading: false,
    updatePublishError: false,

    unPublishResult: false,
    unPublishLoading: false,
    unPublishError: false,
}

const user = (state = initialState, action) =>{
    switch(action.type){

        case GET_LIST_USER:
           
            return{
                ...state,
                getListUserResult: action.payload.data,
                getListUserLoading: action.payload.loading,
                getListUserError: action.payload.errorMessage,
            }

        case ADD_USER:
            return{
                ...state,
                addUserResult: action.payload.data,
                addUserLoading: action.payload.loading,
                addUserError: action.payload.errorMessage,
            }

            case GET_CURRENT_USER:
                return{
                    ...state,
                    getCurrentUserResult: action.payload.data,
                    
                }

           
        case ADD_POST:
            return{
                ...state,
                addPostResult: action.payload.data,
                addPostLoading: action.payload.loading,
                addPostError: action.payload.errorMessage,
            }
            case ADD_POST_PROFILE:
                return{
                    ...state,
                    addPostProfileResult: action.payload.data,
                    addPostProfileLoading: action.payload.loading,
                    addPostProfileError: action.payload.errorMessage,
                }
        
        case LOGOUT:
            return{
                ...state,
                LogoutResult: action.payload.data,
            }
        
        case UPDATE_PUBLISH:
            return{
                ...state,
                updatePublishResult: action.payload.data,
                updatePublishLoading: action.payload.loading,
                updatePublishError: action.payload.errorMessage,
            }

        case UNPUBLISH:
            return{
                ...state,
                unPublishResult: action.payload.data,
                unPublishLoading: action.payload.loading,
                unPublishError: action.payload.errorMessage,
            }    
        default : 
        return state
    }
}

export default user