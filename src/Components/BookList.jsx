import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useSearchParams } from 'react-router-dom'
import styled from "styled-components"
import { GET_BOOKS } from '../Redux/AppRedux/action'
import BookCard, { GridWrapper } from './BookCard'
const BookList = () => {
    const books = useSelector((state)=> state.AppReducer.books)
    const dispatch =useDispatch();
    const location = useLocation();
    const [searchparams]=useSearchParams();
    useEffect(()=>{
        if(location || books.length===0){
          const sortBy =searchparams.get("sortBy")
          let getbooksparams={
          params:{
            category: searchparams.getAll("category"),
            _sort : sortBy && "release_year",
            _order:sortBy
          }
        }
            dispatch(GET_BOOKS(getbooksparams))
        }
    },[location.search])
  return (
    <BookListWrapper>
      <header>BOOK LIST</header>
      <>{
        books.length > 0 && books.map((sb)=>
        <GridWrapper  key={sb.id}>
              <BookCard Sbook={sb}/>
              </GridWrapper>
        
        )
        }</>

    </BookListWrapper>
  )
}

export default BookList
export const BookListWrapper = styled.div`
width:100%;
border: 1px solid blue;
`