import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'
import Statistic, { LoaderComp } from './Statistic'
import Sales from './Sales'
import Orders from './Orders'
import Analytic from './Analytic'
import Shopping from './Shopping'
import Add from './Add'
import { Button, Form } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import {db } from '../firebase'
import LoadingBar from '../UI1/utils/LoadingBar';
import { useLocation, useNavigate } from 'react-router-dom';
import { useUserAuth } from "../context/UserAuthContext";


const AddEventForm=(props)=>{


const [AddingEvent, setAddingEvent] = useState(false)
 const CollegeName=props.CollegeName;
 const EventName=props.EventName;

   const [Name, setName] = useState("");
   const [Date, setDate] = useState("");
   const [Time, setTime] = useState("");
   const [Fee, setFee] = useState("");
   const [IsAllowed, setIsAllowed] = useState(false);
   const [MaxNo, setMaxNo] = useState("1");
   const [Coordi, setCoordi] = useState("")
   const [CoordiName, setCoordiName] = useState("")
   
   const [Prize1, setPrize1] = useState("");
   const [Prize2, setPrize2] = useState("");
   const [Prize3, setPrize3] = useState("");
   




    const handleAddEvent = async (e) => {
        e.preventDefault();

        setAddingEvent(true)
        db.collection("Comp").doc(""+Name)
        .set({
CName:Name,
CDate:Date,
CTime:Time,
CFee:Fee,
CIsAlloud:IsAllowed,
CMaxNo:MaxNo,
CCordiName:CoordiName,
CCoordi:Coordi,
CPrize1:Prize1,
CPrize2:Prize2,
CPrize3:Prize3,
CParentEvent:EventName,
College:CollegeName,



        }).then(d=>{
          db.collection("Events").doc(""+EventName.replace(/\s+/g, '')).collection("SubComp").doc(""+Name)
          .set({
            CName:Name,
            parent:EventName.replace(/\s+/g, '')
          }).then(playload=>{
            alert("Compitition Added")
            setAddingEvent(false);
          
          })
        })
        
      };





      if(AddingEvent){
return(
  <LoaderComp text={"Please Wait..! We are adding your competition"}></LoaderComp>
 
)
      }else{
    return(
      <div>
        <Form  onSubmit={handleAddEvent}>
            <div style={{display:'flex', padding:'10px',flexWrap:'wrap',alignContent:'center',alignItems:'center',justifyContent:'space-around'}}>
   <div >
       <br></br>
       
      
        <Form.Group className="mb-3" controlId="">
          {/* <Form.Label>Password</Form.Label> */}
          <Form.Control type="text" placeholder="Competition Name" onChange={(e) => setName(e.target.value)}/>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="">
          {/* <Form.Label>Password</Form.Label> */}
          <Form.Control type="date" placeholder="Competition Date" onChange={(e) => setDate(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="">
          {/* <Form.Label>Password</Form.Label> */}
          <Form.Control type="text" placeholder="Competition Time" onChange={(e) => setTime(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="">
             {/* <Form.Label>Password</Form.Label> */}
             <Form.Control type="number" placeholder="Entry Fee" onChange={(e) => setFee(e.target.value)} />
           </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Is group participation allowed ?" onClick={()=>IsAllowed?setIsAllowed(false):setIsAllowed(true)} />
        </Form.Group>
        {
            (IsAllowed)?
             <Form.Group className="mb-3" controlId="">
             {/* <Form.Label>Password</Form.Label> */}
             <Form.Control type="text" placeholder="Maximum Participants" onChange={(e) => setMaxNo(e.target.value)} />
           </Form.Group>:""
        }
        </div>

        <span style={{width:"180px"}}></span>
        <div>
        
       
         <Form.Group className="mb-3" controlId="">
          {/* <Form.Label>Password</Form.Label> */}
          <Form.Control type="text" placeholder="Cooordinator Name" onChange={(e) => setCoordiName(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="">
          {/* <Form.Label>Password</Form.Label> */}
          <Form.Control type="phone" placeholder="Cooordinator Number" onChange={(e) => setCoordi(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="">
          {/* <Form.Label>Password</Form.Label> */}
          <Form.Control type="number" placeholder="Prize 1" onChange={(e) => setPrize1(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="">
          {/* <Form.Label>Password</Form.Label> */}
          <Form.Control type="number" placeholder="Prize 2" onChange={(e) => setPrize2(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="">
          {/* <Form.Label>Password</Form.Label> */}
          <Form.Control type="number" placeholder="Prize 3" onChange={(e) => setPrize3(e.target.value)} />
        </Form.Group>
        </div>
        </div> 
        
        <Button variant="primary" type="submit">
          Add Event
        </Button>
       
     <br>
     </br>
     <br></br>
      </Form>
    
       
       </div>
    )
      }
}


function Dashboard(props) {




  
const [EventName, setEventname] = useState("")
const [CollegeName, setCollegeName] = useState("")
const [Url, setUrl] = useState("")
const [compArray, setcompArray] = useState([])

const [openForm, setopenForm] = useState(false)


  const { logOut, user } = useUserAuth();
  const navigate=useNavigate();
const location =useLocation();

const [trigger, settrigger] = useState("Not")


const [AskPasscode, setAskPasscode] = useState(true)


    useEffect(() => {
 
      

        const docId = 'Sneha';
        const docRef = db.collection('Events').doc(docId);
          
        // docRef.get().then((doc) => {
        //     if (doc.exists) {
        //         alert("Book exist already")
        //     }else{
        //         alert("Failed")
        //     }
        // })
CheckUser()  

      
    }, [setcompArray,setAskPasscode,settrigger]);


const CheckUser=async()=>{
  
  
if(user){
  try {
    const val=location.state.event;
    setEventname(location.state.event)
    // const unsubscribe=await fatchData();  
    console.log("true"+val)
    if(location.state.event!==""){
      await fatchData();
    }else{
      console.log("Matter")
    }
    
  } catch (error) {
    console.log("false"+error.message)
   
    navigate('/event-login')
  }

}else{
  navigate('/event-login')
}
}
    
const fatchData=async()=>{
  console.log("hello")
    db.collection("Events").doc(""+location.state.event.replace(/\s+/g, ''))
  .get().then( snapshot=>{
   console.log("sss"+snapshot.data().EName)
   var name=  snapshot.data().EName
   var college= snapshot.data().ECollege
   var url= snapshot.data().Url
setEventname(name)
 setCollegeName(college)
 setUrl(url)


  }).catch(e=>{
    console.log("00"+e.message)
  }).then(res=>{
    
   // fatchComp()

  })
  
}


const fatchComp=async()=>{
  if(EventName===""){

  }
  await db.collection("Events").doc(""+location.state.event).collection("SubComp")
  .get().then((snapshot)=>{
     console.log("aaaaaaaaa")
      snapshot.forEach(item=>{
          console.log(item.data())
          setcompArray(arr=>[...arr,item.data()])
      })
  })
}

    return (
        <div>

 {/* <Sidebar style={{}}></Sidebar>
      
        <Section>
        <Navbar />
       
        <div className="grid">
            
            <div className="grid_1">
                <Statistic />
                <Sales />
                <Orders />
            </div>
            <div className="grid_2">
                <Analytic />
                <Shopping />
                <Add />
            </div>
        </div>
    </Section> */}

<Container >

 


      <Sidebar name={EventName} college={CollegeName} url={Url}/>
    
      {/* <MainContent/> */}
      <div style={{display:'flex',alignContent:'center',alignItems:'center',justifyContent:'space-between','width':'100%',flex:'1', flexDirection:'column'}}>
      <br></br>
  
      <ContactContainer onClick={()=>openForm?setopenForm(false):setopenForm(true)}>
          <span>Add New Competition</span>
        
        </ContactContainer>
        {
          openForm?  <AddEventForm CollegeName={CollegeName} trigger={settrigger} EventName={EventName}></AddEventForm>:""
        }
      <br></br>
      {
        (location.state===null)?<div></div>: <Statistic name={location.state.event}></Statistic>
      }
      
                
                <Sales />
               
                <Orders name={location.state.event}/>
            </div>

    </Container>

    </div>
    )
}

export default Dashboard;
const Container = styled.div`
  display: flex!important;
  width:100vw !important;
  background-color: #EEF4FF;

  height: 97vh;
  alignContent:center;
  alignItems:center;
  
  flex-wrap:wrap;
  flex-direction: row !important;
//   background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%);
  
  @media screen and (max-width: 420px) {
    overflow:scroll;
  }
  



    .grid_1 {
       
        // z-index: 2;
        
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 1rem;
       
    }
    .grid_2 {
        z-index: 2;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }


`;
const ContactContainer = styled.div`
  width: 60%;
  background-color: #091322;
  color: #c4c4c4;
  height: 70px;
  margin: auto auto;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  a {
    color: white;
    text-decoration: none;
  }

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-bottom: 2rem;
  }
`;

