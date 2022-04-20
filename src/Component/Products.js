import React from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
import { ProductItem } from './ProductItem'


const Container =styled.div`

display: grid;
align-items: center;
justify-content: space-between;
justify-items: center;
grid-template-columns: repeat(auto-fit,minmax(320px,1fr));


`

export const Products = () => {
    return (

        <Container>
            {popularProducts.map(item=>(
                <ProductItem item={item} key={item.id}></ProductItem>
            ))}
        </Container>
        
    )
}
