

import styled from 'styled-components'
import React, { useEffect, useState } from 'react'

import Lottie from 'lottie-react';
import loading from "../UI1/assets/lottie/loading.json";
import './Statistic.css'
import { db } from '../firebase';
import { LoaderComp } from './Statistic';
function Orders(props) {


  const [compArray, setcompArray] = useState([])
    const [Loading, setLoading] = useState(true)
    
    useEffect(() => {
    setcompArray([])
        fatchComp()
    
   
    },  []);
    const fatchComp=async()=>{
 console.log("aaas"+props.name);
        setLoading(true)
        await db.collection("Bookings").doc(""+props.name)
        .get().then((snapshot)=>{
          console.log(snapshot)
           if(!snapshot.exists){
            setLoading(false)
           
           }else{
            
              
                setcompArray(arr=>[...arr,snapshot.data()])

           
           
           
                setLoading(false)
            
        }
        })
      }


      const renderList = compArray.map((item) => 
     
       
      
       
        
        
            
      <tr style={{height:'60px'}}>
      <td>{item.Name}</td>
      <td>{item.CompName}</td>
      <td>{item.College}</td>
      <td>{item.Department}</td>
      <td>{item.Year}</td>
      <td>{item.Phone}</td>
      <td ><button>Booked</button></td>
    </tr>
      
        

      )

      if(!Loading){



        return (
        <Section>
        <div className="orders">
      <div className="orders__details">
          <div>
                <h4>Recent Bookings</h4> 
          </div>
          <div> 
            <button> SEE ALL</button>
            
          </div>
        </div>
        <div className="orders__table">
            <table>
            <tr style={{height:'60px'}}>
              <th style={{height:'60px'}}>Student Name</th>
              <th>Competition </th>
              <th>College</th>
              <th>Department</th>
              <th>Year</th>
              <th>Phone No</th>
              <th>Status</th>
            </tr>
            {renderList}
            
           
            </table>
        </div>
        </div>
        </Section>
    )}
    else{
      return(
      
      <LoaderComp text={"Loading Bookings"}></LoaderComp>
     
       
      )
    }
}

export default Orders
const Section = styled.section`
.orders {
    color: black;
  
    width: 1000px;
    margin:10px !importent;
    background-color: #EEF4FF;
    @media screen and (max-width: 420px) {
  width:90vw;
  
    }
    .orders__details {
        display: flex;
        justify-content: space-between;
       
        margin: 10px;
        margin: 1rem 0 ;
        div {
            display: flex;
            gap: 1rem;
            
            button {
                padding: 0.4rem 1rem;
                border: none;
                cursor: pointer;
                background-color: white;
                color: #668DFF;
                font-weight: bold;
            }
        }
    }
    .orders__table {
        display: flex;
        overflow-x: scroll ;
        overflow-y: scroll ;
        background:#fff;
        
        margin-bottom:20px;
        border-radius:15px;
      
        margin: 1rem 0;
        @media screen and (max-width: 420px) {
            overflow-y: visible;
              }
        table {
            border-collapse: collapse;
            width: 100%;
           
            th, td {
                text-align: center;
                padding: 5px;
              height:60px
             
                border-bottom: 0.2px solid rgb(148, 145, 145);
                button {
border-radius: 0.3rem;
padding: 0.4rem 1rem;
border: none;
cursor: pointer;
background-color: #EEF4FF;
color: blue;

font-weight: bold;
                }
                img {
                    height: 2rem;
                    width: 2rem;
                }
                span {
                    margin-top: 0.2 rem;
                }
            }
            .img {
                display: flex;
                justify-content: center;
            }
        }
    }
}
`;