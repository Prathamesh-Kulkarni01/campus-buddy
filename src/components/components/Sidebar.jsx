import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { RiHomeLine, RiFileCopyLine } from "react-icons/ri";
import { FaWallet } from "react-icons/fa";
import { AiOutlinePieChart } from "react-icons/ai";
import Badge from "./Badge";
import apple from "../../assets/apple.png";
import { darkThemeColor } from "../utils";
function Sidebar( props) {

const [Url, setUrl] = useState("")
const [Reurl, setReurl] = useState("")
useEffect(() => {
  setUrl(""+props.url)
setReurl("localhost:3000/event/")
  return () => {
    
  }
}, [setUrl])

  return (
    
    <Container style={{}}>
   
      <ProfileContainer>
        <Avatar src={props.url}/>
        
        <Name>{props.name}</Name>
        <Badge content={props.college} />
      </ProfileContainer>
      <LinksContainer>
        <Links>
          <Link>
            <RiHomeLine />
            <h3>Dashboard</h3>
          </Link>
          <Link>
            <RiFileCopyLine />
            <h3>Update Event Details</h3>
          </Link>
          <Link>
            <FaWallet />
            <h3>Total Bookings</h3>
          </Link>
          <a href={`http://localhost:3000/event/${props.name.replace(/\s+/g, '')}`} target="_blank">
            <AiOutlinePieChart />
            <h3>Shear Event Link</h3>
          </a>
        </Links>
        
      </LinksContainer>
    </Container>
  );
}

const Container = styled.div`
 
  height: 100vh;
  max-width:440px!important;
 
  background-color: #091322;
  display: flex;
  flex:1;
  flex-direction: column;
  align-items:center;
    align-content:center;
    justify-content: center;
  gap: 3rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 100vw!important;
    max-width:540px!important;
    height: max-content !important;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Avatar = styled.img`
  height: 7rem;
  border-radius: 6rem;
  margin-top: 20%;
`;

const Name = styled.h1`
  color: white;
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0.8rem 0 0.5rem 0;
`;

const LinksContainer = styled.div`
  background-color: ${darkThemeColor};
  height: 100%;
  width: 100%;!important;
 
  display:flex;
    flex-direction: column;
    align-items:center;
    align-content:center;
    justify-content: center;
  @media screen and (min-width: 520px) {
    width: 100%;
    display:flex;
    flex-direction: column;
    align-items:center;
    align-content:center;
    justify-content: center;
    height: max-content !important;
  }

`;

const Links = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  height: 60%;
 
    
    align-items:center;
    align-content:center;
    justify-content: center;
  @media screen and (min-width: 520px) {
    width: 100%;
    display:flex;
    align-items:center;
    align-content:center;
    justify-content: center;
    height: max-content !important;
  }
`;

const Link = styled.li`
 
  margin-bottom: 2rem;
  text-align:center;
  display: flex;
  gap: 1rem;
  color: #e4e4e4;
  cursor: pointer;
  h3 {
    font-weight: 300;
  }
  svg {
    font-size: 1.1rem;
    margin-top: 3%;
  }
`;



export default Sidebar;
