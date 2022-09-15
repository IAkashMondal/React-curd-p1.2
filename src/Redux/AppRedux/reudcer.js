import { GET_BOOKS_FAILURE, GET_BOOKS_LOADING, GET_BOOKS_SUCESS } from "./actiontype";

const initialState={
    isloading:false,
    books:[],
    isError:false
}
export const reducer =(oldstate=initialState,action)=>{
    switch(action.type){
        case GET_BOOKS_LOADING:{
            return({
                ...oldstate,isloading:true
            })
        }
        case GET_BOOKS_SUCESS:{
            return({
                ...oldstate,isloading:false,books:action.payload
            })
        }
        case GET_BOOKS_FAILURE:{
            return({
                ...oldstate,isError:false
            })
        }
        default: return oldstate ;
    }
}