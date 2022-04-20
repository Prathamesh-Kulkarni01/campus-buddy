import React from 'react'
import styled from 'styled-components'
import { Navbar } from '../Component/Navbar'
import { Announcement } from '../Component/Announcement'
import { Products } from '../Component/Products'
import { Footer } from '../Component/Footer'

const Container = styled.div``
const Title = styled.h1`margin: 20px;`
const FilterContainer = styled.div` 
display: flex;

justify-content: space-between;
`
const Filter = styled.div`
margin: 20px;
`
const FilterText = styled.span`
font-size: 20px;
font-weight: 600;
margin-right: 20px;
`
const Select = styled.select`
    margin-right: 10px;
    padding: 10px;
    margin-right: 20px;
`
const Option = styled.option``


export const ProductList = () => {
    return (
        <Container>
            <Navbar></Navbar>
            <Announcement></Announcement>
            <Title>Painting</Title>
            <FilterContainer>
                <Filter><FilterText>Filter Products:</FilterText>

                    <Select>
                        <Option disabled selected>
                            By College
                        </Option>
                        <Option>ADCET, Ashta</Option>
                        <Option>RIT, Islampr</Option>
                        <Option>KIT, Kolhapur</Option>
                    </Select>



                    {/* -------------------------------------------- */}
                    <Select>
                        <Option disabled selected>
                            By Entry
                        </Option>
                        <Option>Group Entry</Option>
                        <Option>Individual  Entry</Option>
                    </Select>


                    {/* ---------------------------------------------- */}


                </Filter>


                <Filter><FilterText>Sort Products:</FilterText>

                    <Select>
                        <Option disabled selected>
                            By Date
                        </Option>
                        <Option>Upcomming</Option>
                        <Option>Newest</Option>

                    </Select>
                    {/* ----------------------------------------- */}
                    <Select>
                        <Option disabled selected>
                            By Fees
                        </Option>
                        <Option>Fees(asc)</Option>
                        <Option>Fees(desc)</Option>

                    </Select>
                </Filter>

            </FilterContainer>
            <Products></Products>
            <Footer></Footer>
        </Container>
    )
}
