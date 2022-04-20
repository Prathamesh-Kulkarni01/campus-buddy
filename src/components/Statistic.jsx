import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { AiFillTag } from "react-icons/ai";
import { AiFillExperiment } from "react-icons/ai";
import { AiFillDollarCircle } from "react-icons/ai";
import { AiOutlineArrowUp } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";
import Lottie from 'lottie-react';
import loading from "../UI1/assets/lottie/loading.json";
import './Statistic.css'
import { db } from '../firebase';
function Statistic(props) {
    
    
    const [compArray, setcompArray] = useState([])
    const [Loading, setLoading] = useState(true)
    
    useEffect(() => {
    setcompArray([])
        fatchComp()
    
   
    },  []);
    const fatchComp=async()=>{
        setLoading(true)
        await db.collection("Events").doc(""+props.name.replace(/\s+/g, '')).collection("SubComp")
        .get().then((snapshot)=>{
           if(snapshot.empty){
            setLoading(false)
           }else{
            snapshot.forEach(item=>{
              
                setcompArray(arr=>[...arr,item.data()])

            })
           
           
                setLoading(false)
            
        }
        })
      }
      const itemList = ["Item1", "Item2", "Item3", "Item4", "Item5"];
      const renderList = compArray.map((item) => 
     
       
      <div style={{width:"300px", display:'flex',background:'#fff',borderRadius:'15px',flexDirection:'column',margin:'10px',flexWrap:'wrap',height:'100px',alignItems:'center',justifyContent:'center',boxShadow: '0  10px 10px rgba(0, 0, 0, 0.1)'} }>
      
  <h4>{item.CName}</h4>
  {console.log("VVVVVVVVVVVVVVVVVVVV")}
  <h1 style={{fontWeight:'800'}}>1000</h1>
      </div>
     

                           );
if(!Loading){



    return (

<div>

<div style={{width:"100%", display:'flex',flexDirection:'row',flexWrap:'wrap',alignItems:'center',alignContent:'center',justifyContent:'space-around' }}>

{
renderList}
</div>
  {/* {
    <div>
        <h1>hhhh</h1>
        <h1>hhhh</h1>
        <h1>hhhh</h1>
        <h1>hhhh</h1>
    </div>
   }{   compArray.map((val,i)=>{
    <h1>hhhh22</h1>})
   } */}
        {/* <div style={{width:"100%", display:'flex',flexDirection:'row',flexWrap:'wrap',alignItems:'center',alignContent:'center',justifyContent:'space-around' }}>
       
        <div style={{width:"300px", display:'flex',background:'#fff',borderRadius:'15px',flexDirection:'column',margin:'10px',flexWrap:'wrap',height:'100px',alignItems:'center',justifyContent:'center',boxShadow: '0  10px 10px rgba(0, 0, 0, 0.1)'} }>
        <h1>hhhh22</h1>
    <h4>88888</h4>
    {console.log("VVVVVVVVVVVVVVVVVVVV")}
    <h1 style={{fontWeight:'800'}}>1000</h1>
        </div>
       
     </div>
      */}
      
  

</div>
       
       
    )

}else{
    return(
        <div>
  <LoaderComp text={"Loading Competitions"}></LoaderComp>
  <br></br>
    <h6 style={{padding:'15px',border:'0.6px solid gray'}}>Opps...! Nothing to show <br></br>You haven't added any competition yet...!</h6>
   
        </div>
 
    )
}
}

export default Statistic

export const LoaderComp=(props)=>{
    return(
    <div style={{width:'100%',height:'30%',display:'flex',overflow:'hidden',flexDirection:'column',justifyContent:'center',alignItems:'center',alignContent:'center', background:'#fefbfbca',borderRadius:'20px'}}>
    <Lottie style={{width:'150px'}} animationData={loading} loop={true} rendererSettings= {{
      preserveAspectRatio: 'xMidYMid slice'
    }}/>
    <h6 style={{cursor:'pointer',}}>{props.text}</h6>
    </div>
    ) 
 
}