import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
import { GET_BOOKS, PATCH_BOOK } from '../Redux/AppRedux/action';

const EditBook = () => {
  const Book = useSelector(state => state.AppReducer.books);
  const[bookname,setBookname]=useState("");
  const[bookAuthor,setBookAuther]=useState("");
  const navigate = useNavigate();
  const {id} =useParams();
  const dispatch = useDispatch();
  const handelUpdate =()=>{
    const payload={
      book_name: bookname,
      author:bookAuthor
    }
    dispatch(PATCH_BOOK(id,payload))
    .then(()=>{
      navigate("/books")});
    ;
  }
  useEffect(()=>{
    if(Book.length === 0){
      dispatch(GET_BOOKS())
    }

  },[Book.length,dispatch,navigate]);
  useEffect(()=>{
    if(id){
      const BookById = Book.find((book)=> book.id === Number(id))
      BookById && setBookAuther(BookById.author);
      <br/>
      BookById && setBookname(BookById.book_name);
      
    }
  },[Book,id])
  
  return (
    <div>
      <>
      <h1>EDit page</h1>
      </>
      <input type="text" value={bookname} onChange={(e)=>setBookname(e.target.value)}  />
      <br/>
      <input type="text" value={bookAuthor} onChange={(e)=>setBookAuther(e.target.value)} />
      <br/>
      <button onClick={handelUpdate}>Edit Data</button>
    </div>
  )
}

export default EditBook
