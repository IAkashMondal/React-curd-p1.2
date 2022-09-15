import axios from "axios"
import { GET_AUTH_FAILURE, GET_AUTH_LOADING, GET_AUTH_SUCESS } from "./actionType"
export const GET_AUTH_LOADING_fn=()=>{
    return {type: GET_AUTH_LOADING}
}
export const GET_AUTH_SUCESS_fn=(payload)=>{
    return {type: GET_AUTH_SUCESS,payload}
}
export const GET_AUTH_FAILURE_fn=()=>{
    return {type: GET_AUTH_FAILURE}
}

export const LOGIN=(payload)=>(dispatch)=>{
    dispatch(GET_AUTH_FAILURE_fn())
   return axios.post("https://reqres.in/api/login")
    .then((r)=>{ dispatch(GET_AUTH_SUCESS_fn(r.data.token))})
    .catch((e)=>{GET_AUTH_FAILURE_fn(e)})
}
