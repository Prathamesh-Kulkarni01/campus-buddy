
import React from 'react'
import styled from 'styled-components'



const Container=styled.div`
flex:1;
margin: 3px;
height: 100%;

`
const Image=styled.img`
    width: 100%;
    
    
    
    
`
const Info=styled.div`

width: 100%;

display: flex;
align-items: center;

flex-direction: column;

`
const Title=styled.h1`

margin-bottom: 2px;

`
    
const Button=styled.button`
    border: none;
    padding: 10px;
    background-color:black;
    color: white;
    width: 100%;
    font-weight: 600;
`
export const CategoryItem = ({item}) => {
    return (
        <Container>
<Image src={item.img}></Image>
<Info>
    <Title>{item.title}</Title>
    <Button>Join Now</Button>
</Info>
        </Container>
    )
}
