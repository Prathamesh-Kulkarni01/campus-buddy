import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container=styled.div`
height: 30px;
background-color: teal;
color: white;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
font-weight: 500;
${mobile({fontSize:"9px",height:"20px"})};
`
export const Announcement = () => {
    return (
       
       <Container>Supper Offer! Get upto 30% discount on each Compitition</Container>
    )
}
