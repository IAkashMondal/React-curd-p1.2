import { GET_BOOKS_FAILURE, GET_BOOKS_LOADING, GET_BOOKS_SUCESS } from "../AppRedux/actiontype"
import axios from "axios"
export const GET_BOOKS_LOADING_fn=()=>{
    return {type: GET_BOOKS_LOADING}
}
export const GET_BOOKS_SUCESS_fn=(payload)=>{
    return {type: GET_BOOKS_SUCESS,payload}
}
export const GET_BOOKS_FAILURE_fn=()=>{
    return {type: GET_BOOKS_FAILURE}
}

export const GET_BOOKS =(params) =>(dispatch)=>{
    dispatch(GET_BOOKS_LOADING_fn())
   return axios.get("http://localhost:8080/books",params)
    .then((r)=> {dispatch(GET_BOOKS_SUCESS_fn(r.data))})
    .catch((e)=>{GET_BOOKS_FAILURE_fn(e)})
}
