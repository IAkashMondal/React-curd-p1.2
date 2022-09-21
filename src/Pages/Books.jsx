import React from 'react'
import BookList from '../Components/BookList'
import FilterCompo from '../Components/FilterCompo'
import styled from "styled-components"

const Books = () => {
  return (
    <BookWrapper>
      <FilterCompo/>
      <BookList/>
    </BookWrapper>
  )
}

export default Books

export const BookWrapper = styled.div`
margin:0;
display:flex;
gap:1rem;
justify-content: center ;
align-item:center;
`
