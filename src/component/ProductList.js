import React from 'react'
import styled from 'styled-components'
import Product from './Product'
function ProductList() {
    return (
        <ProductListWarp>
            <Product />
        </ProductListWarp>
    )
}

export default ProductList

const ProductListWarp = styled.div`
    height:89.8vh
`
