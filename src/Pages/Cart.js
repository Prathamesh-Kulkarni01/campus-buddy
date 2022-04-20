import React from 'react'
import styled from 'styled-components'
import { Footer } from '../Component/Footer'
import { Navbar } from '../Component/Navbar'
import { Announcement } from '../Component/Announcement'
import { Add, Remove } from '@material-ui/icons'
import { mobile } from '../responsive'

const Container = styled.div``
const Wrapper = styled.div``
const Title = styled.h1`
font-weight: 300;

text-align: center;

`
const Top = styled.div`
display: flex;
align-items: center;
margin: 0 20px;
padding: 20px;
justify-content: space-between;
`



const TopButton = styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
border: ${props => props.type === "filled" && "none"};
background-color: ${props => props.type === "filled" ? "black" : "transparent"};
color: ${props => props.type === "filled" && "white"};

`
const TopTexts = styled.div``

const TopText = styled.span`
text-decoration: none;
cursor: pointer;
margin: 0px 10px;

`
const Bottom = styled.div`
display: flex;
margin: 0 20px;
flex-wrap: wrap;
`



const Info = styled.div`
flex:3;
`
const Product = styled.div`
display: flex;

justify-content: space-between;

${mobile({ flexDirection: "column" })};
`

const ProductDetails = styled.div`
flex: 2;
display: flex;
flex-wrap: wrap;

`


const Image = styled.img`
width: 200px;

`

const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
flex-direction: column;
flex-wrap: wrap;


`

const ProductName = styled.span``

const ProductId = styled.span``

const Specification = styled.p``



const PriceDetails = styled.div`
display: flex;

margin-right: 30px;
justify-content: center;
justify-items: center;
align-items: center;
flex-direction: column;
${mobile({ flexDirection: "row", justifyContent: "space-around" })};
`


const ProductAmmountContainer = styled.div`
display:flex;
align-items: center;
justify-content: center;
justify-items: center;
border-radius: 20px;
padding: 10px;
border: 0.2px solid teal;

margin-bottom: 20px;
${mobile({ marginBottom: "0" })};
`
const ProductAmmount = styled.p`
font-size: 24px;
margin: 5px;

`

const ProductPrice = styled.p`
font-size: 30px;
font-weight: 200;

`
const Hr = styled.hr`
background-color: #eee;
height: 1px;

`


const Summary = styled.p`
flex:1;
border: 0.5px solid lightgray;
border-radius: 10px;
padding: 20px;
height: 50vh;
`

const SummaryTitle = styled.h1`
font-weight: 200;
`
const SummaryItem = styled.div`
margin: 30px 20px;
display: flex;
justify-content: space-between;

font-weight: ${props => props.type === "total" && "500"};

font-size: ${props => props.type === "total" && "24px"};
`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const Button = styled.button``



export const Cart = () => {
    return (
        <Container>
            <Navbar></Navbar>
            <Announcement></Announcement>
            <Wrapper>
                <Title>Your Bag</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>

                    <TopTexts>


                        <TopText>Shopping Bag (2)</TopText>
                        <TopText>Your Wishlist (10)</TopText>
                    </TopTexts>

                    <TopButton type="filled">CHECKOUT NOW</TopButton>


                </Top>
                <Bottom>
                    <Info>
                        <Product>

                            <ProductDetails>
                                <Image src="data:image/jpeg;base64,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"></Image>

                                <Details>
                                    <ProductName>
                                        <b>Product:</b>
                                        12 Volt Dc Geared Motor
                                    </ProductName>
                                    <ProductId>
                                        <b>Id:</b>
                                        6375775737697235
                                    </ProductId>
                                    <Specification>
                                        <b>Voltage:</b>
                                        12V
                                    </Specification>
                                </Details>

                            </ProductDetails>

                            <PriceDetails>
                                <ProductAmmountContainer>
                                    <Add></Add>
                                    <ProductAmmount>2</ProductAmmount>
                                    <Remove></Remove>

                                </ProductAmmountContainer>
                                <ProductPrice>2000</ProductPrice>
                            </PriceDetails>



                        </Product>
                        <Hr></Hr>
                        <Product>

                            <ProductDetails>
                                <Image src="data:image/jpeg;base64,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"></Image>

                                <Details>
                                    <ProductName>
                                        <b>Product:</b>
                                        12 Volt Dc Geared Motor
                                    </ProductName>
                                    <ProductId>
                                        <b>Id:</b>
                                        6375775737697235
                                    </ProductId>
                                    <Specification>
                                        <b>Voltage:</b>
                                        12V
                                    </Specification>
                                </Details>

                            </ProductDetails>

                            <PriceDetails>
                                <ProductAmmountContainer>
                                    <Add></Add>
                                    <ProductAmmount>2</ProductAmmount>
                                    <Remove></Remove>

                                </ProductAmmountContainer>
                                <ProductPrice>2000</ProductPrice>
                            </PriceDetails>



                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>Order SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>Rs. 4000</SummaryItemPrice>
                        </SummaryItem>


                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>Rs. 5000</SummaryItemPrice>
                        </SummaryItem>


                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>Rs. -100</SummaryItemPrice>
                        </SummaryItem>


                        <SummaryItem type="total">
                            <SummaryItemText >Total</SummaryItemText>
                            <SummaryItemPrice>Rs. 5900</SummaryItemPrice>
                        </SummaryItem>

                        <TopButton type="filled">CHECKOUT NOW</TopButton>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer></Footer>
        </Container>
    )
}
