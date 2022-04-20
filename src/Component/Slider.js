import React from 'react';
import {Zoom} from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
export const Slider =()=>{
    const Images=[

        'https://www.aryacollege.in/wp-content/uploads/2018/12/Zephyr.jpg',
        'http://www.ssgbcoet.com/events/images/ft2k19_banner.jpg',
        'https://www.jnanvikasmandal.com/College%20and%20Degree%20College%20Airoli/images/banner.jpg',
        'http://2.bp.blogspot.com/-DDUX7F929LE/U2ZAi1ES1aI/AAAAAAAADio/4-W-Iol22b4/s1600/Imperia-1.png'
        
    ];

    const zoomInProperties={
        indicators:true,
        scale:1.4
    }
    return(
        <div  style={{zIndex:'0'}}>
            <Zoom {...zoomInProperties}style={{objectFit:'fill', width:'100%', height:'20rem',borderRadius:'10px', overflow:'hidden', zIndex:'0'}} >
{Images.map((each,index)=>(
    <div key={index} style={{width:'100%'}}>
        <img style={{objectFit:'fill', width:'100%', height:'17rem',borderRadius:'10px', overflow:'hidden'}}  src={each}></img>

    </div>
))}
            </Zoom>
        </div>
    )

}

