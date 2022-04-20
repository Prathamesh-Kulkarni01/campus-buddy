import React from 'react'
import Lottie from 'lottie-react';
import loading from "../assets/lottie/loading.json";
const LoadingBar = (props) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <div style={{zIndex:'10000',width:'100%',display:'flex',justifyContent:'center',alignItems:'center',alignContent:'center',height:'100%', position:'absolute',background:'rgba(249, 249, 249, 0.196)'}}>
    <div style={{width:'100%',height:'100000px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',alignContent:'center', background:'#fefbfbca',borderRadius:'20px'}}>
    <Lottie style={{width:'150px'}} animationData={loading} rendererSettings= {{
      preserveAspectRatio: 'xMidYMid slice'
    }}/>
    <h6 style={{cursor:'pointer',}}>{props.text}</h6>
    </div>
      
      </div>
  )
}

export default LoadingBar;