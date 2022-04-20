import React, { useEffect, useState } from 'react'
import './eventLogin.css'
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/UserAuthContext";
import { db,storage } from '../firebase';
import  firebase from "firebase/compat/app";

import { GoKey } from "react-icons/go";
import LoadingBar from './utils/LoadingBar';
import { useNavigate } from 'react-router-dom';
import { CollectionsSharp } from '@material-ui/icons';

const EventLogin = () => {

  const navigate=useNavigate();
  const { logOut, user } = useUserAuth();
  const { logIn, googleSignIn } = useUserAuth();
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [count, setCount] = useState(0);
  const [openForm, setOpenForm] = useState(false);

  //form error
  const [error, setError] = useState("");

  //loadingbar
  const [isLoading, setLoading] = useState("")
  
  //Form Values
  const [Ename, setEname] = useState("");
  const [Epass, setEpass] = useState("");
  const [Ecollege, setEcollege] = useState("");
  const [EstartDate, setEstartDate] = useState("");
  const [EendDate, setEendDate] = useState("");
  const [Etime, setEtime] = useState("");
  const [EcordName1, setEcordName1] = useState("");
  const [EcordName2, setEcordName2] = useState("");
  const [EcordPhone1, setEcordPhone1] = useState("");
  const [EcordPhone2, setEcordPhone2] = useState("");
  const [Erule, setErule] = useState([]);
  const [Ebanner, setEbanner] = useState(0);



  //Passcode
  const [passCode, setPassCode] = useState("")
  const [passCodeError, setPassCodeError] = useState("Please Enter Access Code")

//download Url
const [Url, setUrl] = useState("")
  //Handle is logged in?
  

  useEffect(() => {
    try {
      CheckUserStatus();
    } catch (error) {
      console.log("====>>>"+error.message)
    }
  
  
    return () => {
    
    }
  }, [setisLoggedIn])
  


const uploadBanner=async()=>{
  setLoading("Uploading")
  const storageRef= storage.ref();
  const uploadTask= storageRef.child('Event/Banner/'+Ename+'/'+Ebanner.name).put(Ebanner)
   uploadTask.on('state_changed', 
  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    var progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
    console.log('Upload is ' + progress + '% done');
    setLoading(progress+" % uploaded")
    switch (snapshot.state) {
      case firebase.storage.TaskState.PAUSED: // or 'paused'
        console.log('Upload is paused');
        setLoading("Upload is paused")
        break;
      case firebase.storage.TaskState.RUNNING: // or 'running'
        console.log('Upload is running');

        break;
    }
  }, 
  (error) => {
    // Handle unsuccessful uploads
    setLoading("")
  }, 
  async() => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
     uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
      console.log('File available at', downloadURL);
      
     setUrl(""+downloadURL)
     setLoading("")
    
      
    }).then(
      // UploadEvent()
    )
  }
);
}

const UploadEvent=async(downloadURL)=>{
  const createrId = user.email;

  setLoading("Uploading Details")
  console.log(""+Ename.replace(/\s+/g, ''))
  console.log(Url)
  await db.collection("Events").doc(""+Ename.replace(/\s+/g, '')).set({
    _id:""+Ename.replace(/\s+/g, ''),
  EName:Ename,
  EPass:Epass,
  Url:Url,
  ECollege:Ecollege,
  EStart:EstartDate,
  EEndDate:EendDate,
  ETime:Etime,
  ECordName1:EcordName1,
  ECordPhone1:EcordPhone1,

  ECordName2:EcordName2,
  ECordPhone2:EcordPhone2,
  EcreaterId:createrId
  })
  .then((docRef)=>{
    
   
  })
  .catch((err)=>{
    setLoading("")
    console.error(err.message)
  })
  const uid=await user.uid
   db.collection("User").doc(""+uid).collection("MyEvents").doc()
    .set({
      EName:Ename,
      EPass:Epass
    }).then((d)=>{
      setLoading("")
      alert("Event Added");
      return navigate('/dashboard',{state:{event:""+Ename}})
    })
}

  const handleSubmit = async (e) => {
    e.preventDefault();

setError("");
window.scrollTo({top:50,behavior:'smooth'})
if(!Ebanner){
  return setError("Please Upload Event Banner")
}


    if (Ename === "") {
      return setError("Please Enter Event Name");
    }
    if (Epass === "") {
     return setError("Please Enter Passcode/ Access Code");
    }


    if (Ecollege === "") {
    return   setError("Please Sellect  College");
    }
    if (EstartDate === "") {
      return setError("Please Add Event Start Date");
    }
    if (EendDate === "") {
      return setError("Please Add Event End Date");
    }
    if (Etime === "") {
      return setError("Please Add Event Time");
    }
    
    if (EcordName1 === "") {
      return setError("Please Add Event Coordinater's Name");
    }
    if (EcordPhone1 === "") {
      return setError("Please Add Event Coordinater's Phone");
    }
    if (EcordName2 === "") {
      return setError("Please Add Event Second Coordinater's Name");
    }
    if (EcordPhone2 === "") {
      return setError("Please Add Event Second Coordinater's Phone");
    }

  if(Url===""){
    return setError("Upload banner Please");
  }else{
UploadEvent()
  }
   
  }



const handlePassCodeSubmit = async(e)=>{
  e.preventDefault();
  setLoading("Checking...")
  console.log(passCode)



  if(passCode!==""){
    
  try {
    const ref=db.collection("User").doc(""+user.uid).collection("MyEvents")
    const query=ref.where("EPass","==",""+passCode);
    query.get()
    .then((docs)=>{
      if(docs!==null){
        docs.forEach(doc=>{
          if(doc){
            setPassCodeError("Done")
            // console.log(doc.data().EName)
            return navigate('/dashboard',{state:{event:""+doc.data().EName}})
            
          }else{
           
          }
        
        })
      }else{
        setPassCodeError("Wrong credentials..XXXX")
       setLoading("")
        
      }
    
       
    }
    ).catch(e=>{
      setPassCodeError("--"+e.message)
      setLoading("")
    })
    setPassCodeError("Wrong credentials..XXXX")
    setLoading("")
  } catch (error) {
    console.log("====>>>"+error.message)
  }
    
  }else{
    
    setPassCodeError("Please Enter Access Code")
    setLoading("")
  }
}



const CheckUserStatus=()=>{
  if(user){
    console.log("Hereee")
  }else{
    setisLoggedIn(false)
    console.log("theree")
  }
  if(user.displayName!==undefined){
    console.log("Done")
    setisLoggedIn(true)
  }
}
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn()
      
        setisLoggedIn(true);
      
     
    } catch (error) {

      console.log(error.message);
      setisLoggedIn(false)
    }
  };

  const AddInput = () => {
    setCount(count + 1);
  }



  return (
    <div className="event-login-main" style={{ width: '100vw', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
      {(isLoading!=="")?<LoadingBar text={isLoading} ></LoadingBar>:""}
      <div style={{ display: 'flex', alignContent: 'center', alignItems: 'center', justifyContent: 'space-around' }}>



        <div id="g-btn1">
          <h3>Log in to <br></br><span style={{ fontWeight: '900' }}>Event Dashboard</span></h3>


          {(isLoggedIn) ?
            <div>
              <h5>Hello You Have Logged In...
              <br></br>
              <span style={{color:'green'}}>Please Enter Pass Code</span><br></br></h5>
              <form onSubmit={handlePassCodeSubmit} style={{ display: 'flex', flexDirection: "row", padding: '10px 10px', position: 'relative' }}>
                <div class="input-group" style={{ flex: '1' }}  >
                  <label for="Access Code">
                    {passCodeError}
                    <sup class="required " title="Required">*</sup>
                  </label>      <input className='g-btn' type="password" name="Access Code" id="last_name" onChange={(e) => setPassCode(e.target.value)} class="required" autocapitalize="off" placeholder="********" aria-required="true"></input>
                </div>
                <button type='submit'  style={{
                  width: "36px", flex: '1', height: '36px', border: '0.3px solid gray',
                  marginLeft: '10px', background: '#fff', borderRadius: '10px', marginTop: '25px'
                }}>
                  <GoKey></GoKey></button>


              </form>
              <p onClick={() => setOpenForm(true)} style={{ color: 'blue', fontSize: '14px' }}>I don't have access code.<br></br>
                <span style={{ fontWeight: '800' }}>Host New Event</span></p>
            </div> :
            <GoogleButton
              className="g-btn "

              type="dark"
              onClick={handleGoogleSignIn}

            ></GoogleButton>
          }

        </div>
      </div>

      <div style={openForm ? { width: "100%", flex: '1', height: '100%', display: 'flex',marginBottom:'30dp' } : { width: "100%", flex: '1', height: '100%', display: 'none',marginBottom:'30dp' }}>


        <div class="signup page-sidebar">
        

          <form onSubmit={handleSubmit} style={{ height: "100%", }} class="signup-form initial-signup-form gtm_signup_register_form" action="/dashboard" accept-charset="UTF-8" >
          <h3 style={{fontWeight:'700'}}>Host New Event</h3>
          <h6>------------------------------------------------------------</h6>
            <p id="fill-all-fields" class="alert alert-error" style={(error !== "") ? { display: 'block', marginTop: '10px', marginRight: '45px' } : { display: 'none', marginTop: '10px', marginRight: '45px' }} role={{ alert }}>{error}</p>
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
              <div style={{ flex: '1', width: '50%', margin: '20px' }}>
                <input name="utf8" type="hidden" value="✓"></input>
                <input type="hidden" name="authenticity_token" value="ZAfH2EniuEZWVkFCZ2wD6SVHZhwUHDEy7TaWfcYpkuNnMdlCSTnEeC8LFtAVNky4xvyWi3a19RA3MyHyiEFhrw=="></input>
                <input type="hidden" name="campaign_id" value="70130000001x9MrAAI"></input>
                <input type="hidden" name="slug" value="default"></input>


                <div class="input-group">
                  <label for="Event_Name">
                    Event Name
                    <sup class="required" title="Required">*</sup>
                  </label>    <input type="text" name="Event_Name" id="first_name" onChange={(e) => setEname(e.target.value)} class="required" autocapitalize="off" autofocus="autofocus" placeholder="Event Name" aria-required="true"></input>
                </div>

                <div class="input-group">
                  <label for="Event Access Code">
                    Event Asccess Code<br></br><span style={{ fontSize: '8px' }}> Access code must be as secure as possible </span>
                    <sup class="required" title="Required">*</sup>
                  </label>      <input type="password" name="Event Access Code" id="last_name" onChange={(e) => setEpass(e.target.value)} class="required" autocapitalize="off" placeholder="************" aria-required="true"></input>
                </div>
                <div class="input-group">
                  <label for="Event Banner">
                    Event Banner<br></br>
                    <sup class="required" title="Required">*</sup>
                  </label>      <input type="file" name="Event Banner" id="last_name" onChange={(e) => setEbanner(e.target.files[0])} class="required" autocapitalize="off"  aria-required="true"></input>
                </div>
                <button onClick={()=> uploadBanner()}>Upload+{isLoading}</button>
                <div class="input-group">
                  <div class="country-selector">
                    <label for="self_declared_country">
                      College
                      <sup class="required" title="Required">*</sup>
                    </label>
                    <select style={{ width: '100%' }} name="self_declared_country" onChange={(e) => setEcollege(e.target.value)} id="self_declared_country" class="required" placeholder="Country/Region" aria-required="true"><option value="">ADCET, ASHTA</option>
                      <option data-newsletter-checkbox="hidden" value="ADCET Ashta">ADCET Ashta</option>
                      <option data-newsletter-checkbox="unchecked" value="RIT Eslampur">RIT Eslampur</option>
                      <option data-newsletter-checkbox="hidden" value="KIT Kolhapur">KIT Kolhapur</option>
                    </select>
                  </div>
                </div>
                <div class="input-group">
                  <label for="Date">
                    Event Start Date
                    <sup class="required" title="Required">*</sup>
                  </label>      <input type="date" name="Date" id="last_name" onChange={(e) => setEstartDate(e.target.value)} class="required" autocapitalize="off" placeholder="Date" aria-required="true"></input>
                </div>
                <div class="input-group">
                  <label for="Date">
                    Event End Date
                    <sup class="required" title="Required">*</sup>
                  </label>      <input type="date" name="Date" id="last_name" class="required" onChange={(e) => setEendDate(e.target.value)} autocapitalize="off" placeholder="Date" aria-required="true"></input>
                </div>

                <div class="input-group">
                  <label for="time">
                    Event Start Time
                    <sup class="required" title="Required">*</sup>
                  </label>      <input type="time" name="time" id="last_name" onChange={(e) => setEtime(e.target.value)} class="required" autocapitalize="off" placeholder="Date" aria-required="true"></input>
                </div>




              </div>


              <div style={{ flex: '1', width: '50%', margin: '20px' }}>

                <div class="input-group">
                  <label for="CoName">
                    Coordinator Name
                    <sup class="required" title="Required">*</sup>
                  </label>      <input type="text" name="CoName" id="last_name" onChange={(e) => setEcordName1(e.target.value)} class="required" autocapitalize="off" placeholder="Phone Number" aria-required="true"></input>
                </div>
                <div class="input-group">
                  <label for="CoName">
                    Coordinator phone Number
                    <sup class="required" title="Required">*</sup>
                  </label>      <input type="text" name="CoName" id="last_name" class="required" onChange={(e) => setEcordPhone1(e.target.value)} autocapitalize="off" placeholder="Phone Number" aria-required="true"></input>
                </div>
                <div class="input-group">
                  <label for="CoName">
                    Coordinator Name
                    <sup class="required" title="Required">*</sup>
                  </label>      <input type="text" name="CoName" id="last_name" class="required" autocapitalize="off" onChange={(e) => setEcordName2(e.target.value)} placeholder="Phone Number" aria-required="true"></input>
                </div>
                <div class="input-group">
                  <label for="CoName">
                    Coordinator phone Number
                    <sup class="required" title="Required">*</sup>
                  </label>      <input type="text" name="CoName" id="last_name" class="required" onChange={(e) => setEcordPhone2(e.target.value)} autocapitalize="off" placeholder="Phone Number" aria-required="true"></input>
                </div>
                <div class="input-group">
                  <label for="CoName">
                    Rules & Conditions
                    <sup class="required" title="Required">*</sup>
                  </label>

                  {Array.from(Array(count)).map((c, index) => {
                    return (
                      <textarea type="text" name="CoName" onChange={(e) => setErule(e.target.value)} id="last_name" class="required" autocapitalize="off" placeholder="Rules 1- Participents should be ......" aria-required="true"></textarea>
                    )
                  })}

                </div>
                <p onClick={AddInput}>+ Add Rule</p>
              </div>





              <div class="input-group">
                <input type="submit" name="commit" value="Host New Event" class="btn btn-alt full-width" data-disable-with="Host Event"></input>
              </div>

            </div>
            {/* <p class="privacy tos">
    Signing up signifies that you have read and agree to the 
    <a target="_blank" href="">
        Terms of Service</a> 
        <span class="japan-only" style="display:none">,
         the <a target="_blank"
          href="http://www.salesforce.com/jp/company/personalinfo.jsp">
          Salesforce Japan Privacy Statement</a></span> and our 
          <a target="_blank" href="https://www.salesforce.com/company/privacy/">Privacy Policy</a>
          .<br>
          <a href="#" class="optanon-toggle-display" rel="nofollow">Cookie Preferences</a>.
  </p> */}
          </form>



        </div>
      </div>
    </div>
  )
}
export default EventLogin;