import React,{useEffect} from 'react'
import styled from 'styled-components'
import Product from './Product'
import Filter from './Filter'
import {connect} from 'react-redux'
import {fetchProduct} from './redux/Product/ProductActions'
function ProductList({productData,fetchProduct}) {
    useEffect(() => {
        fetchProduct()
    }, [])
    return productData.loading ?(
        <h2>Loading ... </h2>
    ):productData.error ?(
        <h2>{productData.eror}</h2>
    ):(
        <div style={{"position":"absolute",top:"7%" }} className="row">
        <div className="col-md-1">
            <Filter />
        </div>
        <ProductListWarp className="col-md-8">
         {   productData.data && productData.data.map(product =>{
            return <Product title={product.title} image={product.image}/>
        })}
        </ProductListWarp>
        </div>
    )
    // return (
    //     // <ProductListWarp>
    //     //     this is {productData.error}
    //     //     <Product />
    //     // </ProductListWarp>
    // )
}

const mapStateToProps =(state) =>{
    return {
        productData:state.products
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        fetchProduct:() =>dispatch(fetchProduct())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductList)

const ProductListWarp = styled.div`
    display:flex;
    justify-content:center;
    flex-wrap: wrap;
`
