  // this code show  the data in page
  
  
  import React, { useEffect,useState } from 'react'
  import Showdata  from './Showdata'
 const Item=()=>{
  const [list,setList]=useState([])
  
  useEffect(()=>{
    async function getdata(){
      const res= await fetch('https://jsonplaceholder.typicode.com/comments')
      const response = await res.json(res)
     setList(response)
    }
    getdata(list)

  },[])
  


  return<>
  <h1>list of users</h1>
  {list.map(item=><Showdata name={item.name} />)}
  

  </>

}
export default Item


