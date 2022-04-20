import { Facebook, Instagram, LinkedIn, Mail, Map, Phone } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'


const Container = styled.div`
display: flex;
flex-wrap: wrap;

${mobile({ maxWidth: "380px" })};
${mobile({ flexDirection: "coloum" })};
`

const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding:20px;
${mobile({ maxWidth: "300px" })};
`
const Logo = styled.h3`
${mobile({ maxWidth: "360px" })};
`
const Desc = styled.p`
margin: 20px 0px;
${mobile({ maxWidth: "360px" })};
`
const SocialContainer = styled.div`
display: flex;
`
const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
display: flex;
align-items: center;
margin-right: 28px;
justify-content: center;
background-color: #${props => props.color};
`
const Center = styled.div`
flex: 1;
min-width: 380px;
padding: 20px;
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;

flex-wrap: wrap;
`
const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
`
const Right = styled.div`
flex: 1;
padding: 20px;
${mobile({ maxWidth: "380px" })};
`

const ContactItem = styled.div`
display: flex;
align-items: center;
`
const PaymentImage = styled.img`
width: 200px;
`
export const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>CampusMaster</Logo>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro iure cupiditate ipsam officia nam quae odit corrupti dolorem ipsa qui, veniam debitis sed perferendis et aliquid dolores laborum dignissimos temporibus?</Desc>
                <SocialContainer>
                    <SocialIcon color="385999">
                        <Facebook></Facebook>
                    </SocialIcon>

                    <SocialIcon color="E4405F">
                        <Instagram></Instagram>
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <LinkedIn></LinkedIn>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            {/* <Center>
                <Title>Usefull Links</Title>
                <List>
                    <ListItem>Event</ListItem>
                    <ListItem>Winners</ListItem>
                    <ListItem>Project</ListItem>
                    <ListItem>Ideas</ListItem>
                    <ListItem>Internship</ListItem>
                    <ListItem>Hostel</ListItem>
                    <ListItem>Mess</ListItem>
                    <ListItem>Colleges</ListItem>
                </List>
            </Center> */}
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Map></Map>
                    ADCET, Ashta, Dist Sangli , Pin-416301
                </ContactItem>
                <ContactItem>
                    <Phone></Phone>
                    +91 7498526035
                </ContactItem>
                <ContactItem>
                    <Mail></Mail>
                    team@goashta.shop
                </ContactItem>
                <PaymentImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1mkqDH8KLORDBYDyp4MIdRQ2bDx4EwUWT9w&usqp=CAU"></PaymentImage>
            </Right>
        </Container>
    )
}
