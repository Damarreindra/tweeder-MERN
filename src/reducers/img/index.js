import { ADD_PROFILE_PICT } from "../../actions/userAction"

const initialState = {
    addProfilePictResult: false,
    addProfilePictLoading: false,
    addProfilePictError: false,

}

const images = (state = initialState, action) =>{
    switch(action.type){

        case ADD_PROFILE_PICT:
           
            return{
                ...state,
                addProfilePictResult: action.payload.data,
                addProfilePictLoading: action.payload.loading,
                addProfilePictError: action.payload.errorMessage,
            } 
            default : 
            return state
    }
}

export default images