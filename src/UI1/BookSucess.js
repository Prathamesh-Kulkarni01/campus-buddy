import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import './BookingSucess.css' 
const BookSucess = () => {
const [done, setdone] = useState(false)
const location=useLocation()
    useEffect(() => {
        
        const timer = setTimeout(() => {
          console.log('This will run after 1 second!')
          setdone(true)
        }, 2000);
        return () => clearTimeout(timer);
      }, []);

  return (
    <div className="contain">
	<div className="congrats">
		<h1>Congrat<span className="hide">ulation</span>s ! {location.state.stud}</h1>
        <br></br>
		<div className={done?'done drawn':'done'}>
			<svg version="1.1" id="tick" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 37 37" style={{enableBackground:'new 0 0 37 37'}} xmlSpace="preserve">
<path className="circ path" style={{fill:'#0cdcc7',stroke:'#07a796',strokeWidth:'3',strokeLinejoin:'round',strokeMiterLimit:'10'}} d="
	M30.5,6.5L30.5,6.5c6.6,6.6,6.6,17.4,0,24l0,0c-6.6,6.6-17.4,6.6-24,0l0,0c-6.6-6.6-6.6-17.4,0-24l0,0C13.1-0.2,23.9-0.2,30.5,6.5z"
	/>
<polyline className="tick path" style={{fill:'none',stroke:'#fff',strokeWidth:'3',strokeLinejoin:'round',strokeMiterLimit:'10'}} points="
	11.6,20 15.9,24.2 26.4,13.8 "/>
</svg>
			</div>
		<div className="text">
		<p>You have successfully booked Competition <br></br>Here are your details<br></br>Date: {location.state.date}<br></br> at 
			{location.state.college}<br></br>
			ID: 12324
		</p>
			<p>Eagerly awaiting for you...
			</p>
			</div>
		<p className="regards">Regards, Team {location.state.pname}</p>
	</div>
</div>
  )
}

export default BookSucess