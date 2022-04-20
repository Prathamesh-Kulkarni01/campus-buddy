// import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";

const Container=styled.div`
width: 100vw;
height: 100vh;

background: linear-gradient(
    #fae7f17b,
     #786df87d
    
    )
    ,center;
display: flex;
justify-content: center;
align-items: center;
` 
const Wrapper=styled.div`
width: 700px;
padding: 20px;
background-color: white;
align-items: center;
display: flex;


flex-direction: column;
justify-content: center;
margin-top: 100px;
${mobile({width:"100%"})};
`

const Title=styled.h1`
font-size: 20px;
font-weight: 300;

` 
const Form1=styled.form`
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;

` 
const Input=styled.input`
flex: 1;
min-width: 80%;
margin: 15px 0;
padding: 20px;
font-size: 20px;
border-radius:15px ;
box-shadow: inset 0 0 0 1px rgb(0 0 0 /60%), inset 0 0 0 2px rgb(0 0 0/0%),inset 0 0 0 1px rgb(0 0 0/0%) ;

` 
const Button1=styled.button`
width: 80%;
border: none;
height:60px;

padding:20px 15px;
color: white;
margin: 5px;
border-radius:15px ;
font-weight: bold;
background-color: #ff004c;

` 
const Agreement=styled.span`
font-size: 12px;
margin: 20px 0px;
` 
 

export const Register = () => {

    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [password, setPassword] = useState("");
    const { signUp } = useUserAuth();
    let navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      
      alert(email)
      setError("");
      try {
        await signUp(email, password);
        navigate("/");
  
      } catch (err) {
        console.log("asdfghjkasdfghjkasdfghjkasdfghjkasdfghjk")
        console.log(err)
        
        setError(err.message);
      }
    };

    return (
       <Container>
           <Wrapper>
           <h2>CREATE AN ACCOUNT</h2>
           <div className="p-4 box">
        
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Input
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2" style={{display:'flex',alignContent:'center',alignItems:'center',justifyContent:'space-around',flexDirection:'column'}}>
            <Button1 variant="primary" type="Submit">
              Sign up
            </Button1>
            <div className="p-4 box mt-3 text-center">
        Already have an account? <Link to="/">Log In</Link>
      </div>
          </div>

        </Form>
      </div>
      
</Wrapper>
       </Container>
    )
}
