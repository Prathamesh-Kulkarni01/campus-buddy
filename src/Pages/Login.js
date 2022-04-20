
import styled from 'styled-components'
import { mobile } from '../responsive'



import React, { useState } from "react";
import { Link ,useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/UserAuthContext";

// import { signInAPI } from '../actions'
// import {auth, provider} from '../firebase'

const Container = styled.div`
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
const Wrapper = styled.div`
width: 800px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 20px;
border-radius:25px ;
box-shadow: inset 0 0 0 1px rgb(0 0 0 /60%), inset 0 0 0 2px rgb(0 0 0/0%),inset 0 0 0 1px rgb(0 0 0/0%) ;

background-color: white;
${mobile({ width: "100%" })};

`

const Title = styled.h1`
font-size: 20px;
font-weight: 300;
color: #000000;
font-weight: 800;
`
const Form1 = styled.form`
display: flex;
width: 70%;
align-items: center;
justify-items: center;
justify-content: center;
flex-wrap: wrap;
flex-direction: column;
`
const Input = styled.input`
flex: 1;
min-width: 80%;
margin: 25px 0;
padding: 25px;
font-size: 24px;
border-radius:15px ;
box-shadow: inset 0 0 0 1px rgb(0 0 0 /60%), inset 0 0 0 2px rgb(0 0 0/0%),inset 0 0 0 1px rgb(0 0 0/0%) ;

`
const Button1 = styled.button`
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
const GoogleAuthButton = styled.button`
width: 80%;
border: none;
height:60px;

padding:20px 15px;
color: white;
margin: 10px;
font-weight: bold;
background-color: #fff;
border-radius:28px;
color:rgba(0,0,0,0.6);
box-shadow: inset 0 0 0 1px rgb(0 0 0 /60%), inset 0 0 0 2px rgb(0 0 0/0%),inset 0 0 0 1px rgb(0 0 0/0%) ;
z-index: 0;

transition-duration: 167ms;
&:hover{
    background-color: rgba(207,207,207,0.25);
    color: rgba(0,0,0,0.85);
}
`


const Link1= styled.a`
margin: 5px 0px;
font-size: 12px;
text-decoration: underline;
cursor: pointer;
color: #000000;
`





const Login = (props) => {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      

      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
    
      console.log(error.message);
    }
  };

    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>

                {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <input
            style={{flex: '1',
                minWidth: '80%',
                margin: '25px 0',
                padding: '25px',
                fontSize: '24px',
                borderRadius:'15px' ,
                boxShadow: 'inset 0 0 0 1px rgb(0 0 0 /60%), inset 0 0 0 2px rgb(0 0 0/0%),inset 0 0 0 1px rgb(0 0 0/0%)'}}
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Input style={{}}
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2" style={{display:'flex', flexDirection:'column', alignContent:'center',alignItems:'center', justifyContent:'space-around'}}>
            <Button1 variant="primary" type="Submit">
              Log In
            </Button1>
        -------- OR ---------
            <GoogleButton
            className="g-btn"
            type="dark"
            onClick={handleGoogleSignIn}

          />
              <div className="p-4 box mt-3 text-center">
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div>
          </div>
      
        </Form>

               

            </Wrapper>
        </Container>
    )
}

// const test=()=>{
//     console.log("payload")
//     console.log("payload")
//     console.log("payload")
//     console.log("payload")
//     console.log("payload")
     
//     console.log("payload")
//     auth.signInWithPopup(provider)
//     .then((payload)=>{
//         console.log("payload")
//         console.log("payload")
//         console.log("payload")
//         console.log("payload")
//         console.log("payload")
//         console.log("payload")
//         console.log(payload)
//     }).catch(err=>{
//         console.log(err)
//     })
// }
// const mapStateToprops = (state) => {
//     return state;
// }
// const mapDispatchToProps = (dispatch) => ({
//     // signIn: () => dispatch(signInAPI()),
// });

// export default connect(mapStateToprops, mapDispatchToProps)(Login);   
export default Login;    
