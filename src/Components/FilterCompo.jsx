import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import{ useSearchParams } from "react-router-dom"
import styled from "styled-components"

const FilterCompo = () => {
  const[searchparams,setSearchParams]= useSearchParams();
  const InitialShortBy= searchparams.getAll("shortBy");
  const InitialCategoryItems= searchparams.getAll("category")
  const[category,Setcategory]=useState(InitialCategoryItems||[]);
  const[sortBy,setSortby]= useState(InitialShortBy||[])
  const handelFilterCheckBoox =(e)=>{
    const NewCategory =[...category];
    if(NewCategory.includes(e.target.value)){
      //remove it
      NewCategory.splice(NewCategory.indexOf(e.target.value),1)
    }
    else{
      //add check book category
      NewCategory.push(e.target.value)
    }
    Setcategory(NewCategory);
  }
//handel shroting by asc/desc------------->
const handelShortBy=(e)=>{
setSortby(e.target.value);
}

// set params------------------------------->
useEffect(()=>{
  if(category){
    const params= {};
    category && (params.category= category);
    sortBy && (params.sortBy= sortBy);
    setSearchParams(params);
  }
},[category,setSearchParams,sortBy])
  return (
    <FilterWrapper>
      <header>filter</header>
      <>
      <div>
      <input type="checkbox" onChange={handelFilterCheckBoox} value="Novel" checked={category.includes("Novel")}/>
      <label>Novel</label>
      </div>
      <div>
      <input type="checkbox" onChange={handelFilterCheckBoox} value={"Science_Fiction"} checked={category.includes("Science_Fiction")} />
      <label>Science_Fiction</label>
      </div>
      <div>
      <input type="checkbox" onChange={handelFilterCheckBoox} value={"Thriller"} checked={category.includes("Thriller")} />
      <label>Thriler</label>
      </div>
      <div>
      <input type="checkbox" onChange={handelFilterCheckBoox} value={"Motivational"} checked={category.includes("Motivational")} />
      <label>Motivational</label>
     </div>
      </>
      <header>Ordiring</header>
      <div onChange={handelShortBy}>
      <div >
        <input type="radio" value="asc" name="shortBy" defaultChecked={sortBy==="asc"}/>
        <label>Acending</label>
      </div>
      <div>
        <input type="radio" value="desc" name="shortBy" defaultChecked={sortBy==="desc"}/>
        <label>Descending</label>
      </div>
      </div>
    </FilterWrapper>
  )
}

export default FilterCompo

export const FilterWrapper = styled.div`
width:300px;
border: 1px solid red;
`