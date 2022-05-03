import store from "../store";

export const REQUEST_API = "requestApi";

export const GET_INFOS = "getInfos";

export const FAILREQUEST = "failRequest";

const requestApi = () => ({
    type:REQUEST_API,
})

const getInfos = (json) => ({
    type:GET_INFOS,
    payload:json,
})

const failRequest = (erro) => ({
    type:FAILREQUEST,
    payload:erro,
})




export const getInfosAPI = (value) =>{
    return async (dispatch) => {
        dispatch(requestApi())
        const response = await fetch(`https://www.reddit.com/r/${value}.json`);
        const data = await response.json();
        await dispatch(getInfos(data.data.children))
        //console.log(data)
    }
}

