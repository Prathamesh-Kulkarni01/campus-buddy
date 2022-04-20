import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

 const NoInterNet = () => {
  const {id}=useParams()
 
   useEffect(() => {
   
   console.log(id);
     return () => {
  
     }
   }, [])
   
  return (
    <div>NoInterNet+{id}</div>
  )
}
export default NoInterNet;
