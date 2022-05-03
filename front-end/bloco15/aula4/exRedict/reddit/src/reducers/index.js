import {REQUEST_API,GET_INFOS,FAILREQUEST} from '../actions'

const INITIAL_STATE = {isloading: true,info:[],erro:''}

export const reducer = (state = INITIAL_STATE,action) =>{
    switch (action.type){
        case REQUEST_API:
            return {...state,isloading:true}
        case GET_INFOS:
            return {...state,info:action.payload,isloading:false}
        case FAILREQUEST:
            return {...state,erro:action.payload,isloading:false}
        default:
            return state
    }

}