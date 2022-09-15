import React from 'react'
import styled from "styled-components"
const BookCard = ({Sbook}) => {
  return (
    <>
      <img src ="https://www.traceymadeley.com/wp-content/uploads/2022/01/Open-book.jpg" alt='books' width=""/>
      <h3>{Sbook.book_name}</h3>
      <FlexWrapper>
      <h4>{Sbook.category}</h4>
      <h4>{Sbook.release_year}</h4>
      <h4>{Sbook.author}</h4>
      </FlexWrapper>
    </>
  )
}

export default BookCard
export const FlexWrapper =styled.div`
display:flex;
justify-content:space-evenly;
align-item:center;
`
export const GridWrapper =styled.div`
display:grid;
grid-template-columns: auto auto;
`