import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/UserAuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { db } from '../firebase';
import LoadingBar from './utils/LoadingBar';
import { LoaderComp } from '../components/Statistic';

const Title=()=>{
    return(
        <div className='popup_title'>
            Hello
        </div>
    )
}

const BookingForm = (props) => {
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();
  const [isLoggedIn, setisLoggedIn] = useState(false)
  const { logOut, user } = useUserAuth();
  const location =useLocation();

const [Name, setName] = useState("")
const [College, setCollege] = useState("")
const [Phone, setPhone] = useState("")

const [Agree, setAgree] = useState(false)
const [Branch, setBranch] = useState("")
const [Year, setYear] = useState("")

const [Department, setDepartment] = useState("")

const [loading, setLoading] = useState(false)






  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (!isLoggedIn) {
    //   alert("Please Complete Step 1")
   
    // } else {
      if(Name===""){
        return alert("Please Enter Name")
      }
     if(College===""){
       return alert("Please Select College Name")
     }
     if(Department===""){
      return alert("Please Enter Department")
    }
    if(Year===""){
      return alert("Please Select Year Of Study")
    }
    if(Phone===""&&Phone.length!==10){
      return alert("Please Enter Correct Phone Number Without +91")
    }
    if(!Agree){
      return alert("Accept the term and conditions")
    }
    
    
    addData()
  };

const addData=()=>{
  setLoading(true)
  db.collection("Bookings").doc(""+location.state.pname)
  .set({
    Name:Name,
    College:College,
    Department:Department,
    Year:Year,
    Phone:Phone,
    CompName:""+location.state.name,
    EventName:""+location.state.pname,
    Email:user.email,


    


  }).then(()=>{
setLoading(false)
navigate('/done',{state:{name:""+location.state.name,pname:""+location.state.pname,date:""+location.state.dates,college:""+location.state.college,stud:""+Name}})
  })
}
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      setisLoggedIn(true)
    } catch (error) {
    
      console.log(error.message);
    }
  };
  if(loading){
    return(
      <div
      style={{
        width: "250px",
        height: "100vh",
        display: "flex",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <LoaderComp text={"Please Wait..!"}></LoaderComp>
    </div>
    )
  }else{
  return (
    <div style={{width:'100vw',background:'#eee',height:'100vh',display:'flex',justifyContent:'space-around',marginLeft:'10px',marginRight:'10px'}}>
  <div style={{width:'100%', background:'#eee',display:'flex',flexDirection:'column',alignContent:'center',alignItems:'center', display:'flex',alignContent:'center',alignItems:'center',justifyContent:'space-around'}}>
   <br></br>
   <h2>It's Easy!<br></br> <span style={{fontSize:'16px',color:'gray'}}>You are just 2 Steps Away From Booking Sit For {location.state.name}</span></h2>
    <div style={{width:'90vw',flexDirection:'column',background:'#ffffff',borderRadius:'20px',display:'flex',alignContent:'center',alignItems:'center',justifyContent:'space-around'}}>
    <h3 style={{marginTop:'10px',background:'#000000',borderRadius:'50%',padding:'17px',color:'#fff',height:'60px',width:'60px'}}> 1</h3>
   
  { (isLoggedIn)?<h3>Hello {user.displayName} You Have Logged In...<br></br><span>Now go to next step !</span></h3>:
    <GoogleButton
            className="g-btn"
            type="dark"
            onClick={handleGoogleSignIn}
          ></GoogleButton>
  }
    <h6>------------------------------------------------------</h6>
    <h3 style={{marginTop:'10px',background:'#000000',borderRadius:'50%',padding:'17px',color:'#fff',height:'60px',width:'60px'}}> 2</h3>
    <Form  onSubmit={handleSubmit}>
   
    <div class="input-group">
                  <label for="CoName">
                    Name
                    <sup class="required" title="Required">*</sup>
                  </label>      <input type="text" name="CoName" id="last_name" class="required" onChange={(e) => setName(e.target.value)} autocapitalize="off" placeholder="Name" aria-required="true"></input>
                </div>
 
   <div class="input-group">
                  <div class="country-selector">
                    <label for="self_declared_country">
                      College
                      <sup class="required" title="Required">*</sup>
                    </label>
                    <select style={{ width: '100%' }} name="self_declared_country" onChange={(e) => setCollege(e.target.value)} id="self_declared_country" class="required" placeholder="College" aria-required="true">
                    <option data-newsletter-checkbox="unchecked" value=""></option>
                      <option data-newsletter-checkbox="hidden" value="ADCET Ashta">ADCET Ashta</option>
                      <option data-newsletter-checkbox="hidden" value="RIT Eslampur">RIT Eslampur</option>
                      <option data-newsletter-checkbox="hidden" value="KIT Kolhapur">KIT Kolhapur</option>
                    </select>
                  </div>
                </div>
                
  
   <div class="input-group">
                  <label for="CoName">
                   Department
                    <sup class="required" title="Required">*</sup>
                  </label>      <input type="text" name="CoName" id="last_name" class="required" onChange={(e) => setDepartment(e.target.value)} autocapitalize="off" placeholder="Department" aria-required="true"></input>
                </div>
                <div class="input-group">
                  <div class="country-selector">
                    <label for="self_declared_country">
                      Year of Study
                      <sup class="required" title="Required">*</sup>
                    </label>
                    <select style={{ width: '100%' }} name="self_declared_country" onChange={(e) => setYear(e.target.value)} id="self_declared_country" class="required" placeholder="College" aria-required="true">
                    <option data-newsletter-checkbox="hidden" value=""></option>
                      <option data-newsletter-checkbox="hidden" value="TY">BE</option>
                      <option data-newsletter-checkbox="unchecked" value="TY">TY</option>
                      <option data-newsletter-checkbox="hidden" value="SY">SY</option>
                      <option data-newsletter-checkbox="hidden" value="FY">FY</option>
                    </select>
                  </div>
                </div>
                <div class="input-group">
                  <label for="CoName">
                  Phone Number
                    <sup class="required" title="Required">*</sup>
                  </label>      <input type="number" name="CoName" id="last_name" class="required" onChange={(e) => setPhone(e.target.value)} autocapitalize="off" placeholder="Phone Number" aria-required="true"></input>
                </div>
   {(props.isGroupEvent)?<Form.Group className="mb-3" controlId="">
     {/* <Form.Label>Password</Form.Label> */}
     <Form.Control type="text" placeholder="Other Group Members" />
   </Form.Group>:""
}
   <Form.Group className="mb-3" controlId="formBasicCheckbox">
     <Form.Check type="checkbox" label="Yes.I'm agree with term & conditions of event" onClick={()=>Agree?setAgree(false):setAgree(true)} />
   </Form.Group>
   <Button variant="primary" type="submit">
     Register
   </Button>
<br>
</br>
<br></br>
 </Form>
    </div>

   <br></br>
   <br></br>
  </div>
 


 
  
  </div>
  )
}
}

export default BookingForm;