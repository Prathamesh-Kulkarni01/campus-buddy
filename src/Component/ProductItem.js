import { SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Info=styled.div`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
background-color: rgba(0,0,0,0.2);
display: flex;
justify-content: center;
align-items: center;
opacity: 0;
`

const Container=styled.div`
flex: 1;
margin: 15px;

border-radius: 8px;

height: 250px;
box-shadow: 5px 5px 10px 5px #0000001c;
display: flex;
background-color: #f5fbfd;
padding: 5px;
&:hover ${Info}{
opacity: 1;
}

`
const Circle=styled.div`
border-radius: 50%;
background-color: white;
position: relative;
`
const Image=styled.img`
width: 330px;
height: 100%;
border-radius: 8px;
object-fit: cover;
`

const Icon=styled.div`
height: 40px;
width: 40px;
border-radius: 50px;
display: flex;
background-color: white;
align-items: center;
justify-content: center;
margin: 10px;
transition: all 0.5s ease;

&:hover{
    background-color: #e9f5f5;
    transform: scale(1.1);
}


`


export const ProductItem = ( {item}) => {
    return (
       <Container>
<Circle>


<Image src={item.img}></Image>
<Info>
    <Icon>
        <ShoppingCartOutlined></ShoppingCartOutlined>
    </Icon>
    <Icon>
        <SearchOutlined></SearchOutlined>
    </Icon>
</Info>
</Circle>
       </Container>
    )
}
