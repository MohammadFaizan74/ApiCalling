import { useEffect, useState } from "react"
import React from 'react'
import Item from "./Componets/Item"




const App = () => {
  
 const [data,setData]=useState('')
 const[count,setCount]=useState(0)


 const onBtnClick=()=>{
  fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(res =>setData(res))
 }
 useEffect(()=>{
  
 },[])

const onCountClick=()=>{
  setCount(count=>count+1)
}


  return (
    <div>
   <h1>App</h1>
   <h1>Counter-{count}</h1>
   <h2>{JSON.stringify(data)}</h2>
   <button onClick={()=>onBtnClick()}>Test</button>
   <button onClick={()=>onCountClick()}>Counter</button>
   
   <Item/>


    </div>
  )
}

export default App