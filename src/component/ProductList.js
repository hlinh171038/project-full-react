import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import Product from './Product'
import Filter from './Filter'
import {connect} from 'react-redux'
import {fetchProducts} from './redux/Product/ProductActions'
function ProductList({products,fetchProducts}) {
    //call API product
    useEffect(() => {
       fetchProducts()
    }, []);
    
    return <div style={{"position":"absolute",top:"7%" }} className="row">
    <div className="col-md-2">
        <Filter />
    </div>
    <ProductListWarp className="col-md-8">
     {   products &&  products.map(product =>{
        return <Product title={product.title} image={product.image}/>
    })}
    </ProductListWarp>
    </div>
    // return (
    //     // <ProductListWarp>
    //     //     this is {productData.error}
    //     //     <Product />
    //     // </ProductListWarp>
    // )
}

// const mapStateToProps =(state) =>{
//     return {
//         products:state.products.items
//     }
// }
// const mapDispatchToProps = (dispatch) =>{
//     return {
//         fetchProducts:()=>dispatch(fetchProducts())
//     }
// }
export default connect((state) =>({products:state.products.filteredItems}),{fetchProducts})(ProductList)

const ProductListWarp = styled.div`
    display:flex;
    justify-content:center;
    flex-wrap: wrap;
`
