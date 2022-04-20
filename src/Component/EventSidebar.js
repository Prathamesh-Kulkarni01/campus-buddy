import React from 'react'
import Slider from './Slider'
import {CountDown} from './CountDown.js'
export const EventSidebar = () => {
  return (
    <div>
      <div style={{
        justifyContent: 'center', display: 'flex',
        alignContent: 'center', alignItems: 'center',
        borderRadius: '22px',
        objectFit: 'fill', borderRadius: '10px', overflow: 'hidden'
      }}>
        <img width='280px' height='150px' src="https://www.aryacollege.in/wp-content/uploads/2018/12/Zephyr.jpg"></img>
      </div>
      {/* Title */}

      <h1 style={{
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'space-around'


      }}>Laksh 2k22</h1>
      <h6 style={{
        display: 'flex',
        alignContent: 'center',
        textAlign: 'center',
        justifyContent: 'space-around'


      }}>Annasaheb Dange College of Engineering and Technology, Ashta </h6>

     <CountDown></CountDown>

      </div>

      )
}
