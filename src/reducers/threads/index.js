import { GET_THREADS, GET_THREAD, GET_DETAIL_THREAD } from "../../actions/threadsAction"

const initialState = {
    getThreadsResult: false,
    getThreadsLoading: false,
    getThreadsError: false,

    getThreadResult: false,
    getThreadLoading: false,
    getThreadError: false,

    getDetailThreadResult: false,
    getDetailThreadLoading: false,
    getDetailThreadError: false,


   
}

const user = (state = initialState, action) =>{
    switch(action.type){

        case GET_THREADS:
           
            return{
                ...state,
                getThreadsResult: action.payload.data,
                getThreadsLoading: action.payload.loading,
                getThreadsError: action.payload.errorMessage,
            }

            case GET_THREAD:
           
            return{
                ...state,
                getThreadResult: action.payload.data,
                getThreadLoading: action.payload.loading,
                getThreadError: action.payload.errorMessage,
            }

          
            

            case GET_DETAIL_THREAD:
           
            return{
                ...state,
                getDetailThreadResult: action.payload.data,
                getDetailThreadLoading: action.payload.loading,
                getDetailThreadError: action.payload.errorMessage,
            }
        
        default : 
        return state
    }
}

export default user