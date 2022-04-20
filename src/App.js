// import logo from './logo.svg';
// import './App.css';
import {BrowserRouter as Router,Routes , Route, useNavigate}  from 'react-router-dom';
// import {Switch} from 'react-router-dom'
// // import { Home } from './Pages/Home.js';
// import { Home } from './AuthComponents/Home';
// import { ProductList } from './Pages/ProductList';
// import { Product } from './Pages/Product';
import { Register } from './Pages/Register';


import  Login  from './Pages/Login';

// import { Cart } from './Pages/Cart';
import Home1 from './UI1/Home';
import Event from './UI1/Event';
import BookingForm from './UI1/BookingForm';

import NoInterNet from './UI1/utils/NoInterNet'
import test from './UI1/test'


// import Navbar from '../src/components/Navbar'


// import styled from 'styled-components';
// import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'

// function App() {
//   return (
//     <div className="App">

// {/* <Router>
//   <Routes>
//     <Route exact path="/login" element={<Login></Login>}/>
//   </Routes>
// </Router> */}


//   {/* <Home></Home> */}
//  {/* <ProductList></ProductList> */}
//  {/* <Product></Product> */}

//  {/* <Register></Register> */}
//  <Home></Home>
//  {/* <Login></Login> */}
//  {/* <Cart></Cart> */}
//  {/* <Home1></Home1> */}
//  {/* <Div>
//  <Navbar />



//         <Sidebar />
       
//         <Dashboard />
 


        
//     </Div> */}
//     </div>
//   );
// }



// export default App;
// const Div = styled.div `
// position: relative;
// `;




import { Container, Row, Col } from "react-bootstrap";
// import { BrowserRouter as Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./AuthComponents/Home";
// import Login from "./AuthComponents/Login";
import Signup from "./AuthComponents/Signup";
import ProtectedRoute from "./AuthComponents/ProtectedRoute";

import { UserAuthContextProvider } from "./context/UserAuthContext";
import {EventHomePage} from './Event/EventHomePage';
import EventLogin from './UI1/EventLogin';
import BookingSucess from './UI1/BookSucess'
import { useEffect, useState } from 'react';
import app, { db } from './firebase';

function App() {


const [Online, setOnline] = useState(false)

  const check=()=>{
    console.log("checking.....")
    var condition = navigator.onLine ? 'online' : 'offline';
    if (condition === 'online') {
      console.log('ONLINE');
        fetch('https://www.google.com/', { // Check for internet connectivity
            mode: 'no-cors',
            })
        .then(() => {
            console.log('CONNECTED TO INTERNET');
            setOnline(true)
        }).catch(() => {
           console.log('INTERNET CONNECTIVITY ISSUE');
  
           setOnline(false)
        }  )
  
    }else{
       console.log('OFFLINE')
       setOnline(false)
      
    }
  }

  useEffect(() => {
    check()
  
    return () => {
      
    }
  }, [setOnline])
  


  return (


    
    <Container style={{width:'100vw'}} >
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Router>

         
            <Routes>
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home1 />
                  </ProtectedRoute>
                }
              />
              <Route path="/login" element={<Login/>} />
              <Route path="/signup" element={<Register></Register>}/>
              <Route path="/event/:id" exact element={<Event></Event>} />
              <Route path="/dashboard" element={<Dashboard></Dashboard>} />
              <Route path="/booking" element={<BookingForm></BookingForm>} />

<Route path="/event-login" element={<EventLogin></EventLogin>}/>
<Route path="/no-internet" exact element={<NoInterNet></NoInterNet>}/>
<Route path="/done" exact element={<BookingSucess></BookingSucess>}/>
<Route path="/test" element={<test></test>}/>
            </Routes>
            </Router>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
        
}

export default App;