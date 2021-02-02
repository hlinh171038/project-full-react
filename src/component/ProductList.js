import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import Product from './Product'
import Filter from './Filter'
import {connect} from 'react-redux'
import {fetchProducts} from './redux/Product/ProductActions'
import {addToCart} from './redux/Cart/CartActions'
import PropTypes from 'prop-types';

ProductList.defaultProps = {
    products:[]
}
ProductList.propTypes = {
    products:PropTypes.array
}
function ProductList({products,fetchProducts,addToCart,cartItems}) {
    
    //call API product
    useEffect(() => {
       fetchProducts()
    }, []);
    const [page,setPage] = useState(1);
    const [numOfPage,setNumOfPage] = useState(3)
   const  handdleChangePage = (paginationPage) =>{
        setPage(paginationPage)
    }
   
    const pagi = [];
        for(let i=0;i<products.length/numOfPage;i++){
           const btnPagination = <button onClick={() =>handdleChangePage(i+1)}>{i+1}</button>
          pagi.push(btnPagination)
        }
    return <div>
        <div style={{"position":"absolute",top:"7%" }} className="row">
            <div className="col-md-2">
                <Filter />
            </div>
            <ProductListWarp className="col-md-8">
            {   products.slice((page-1)*numOfPage,numOfPage*page).map(product =>{
                return <Product title={product.title} image={product.image} addToCart={() =>addToCart(cartItems,product)}/>
            })}
            </ProductListWarp>
            
            </div>
            <div style={{position: "absolute", bottom: "5%", left: "24%"}}>{pagi}</div>
    </div>
 
}

export default connect((state) =>({products:state.products.filteredItems,cartItems:state.cart.cartItems}),{fetchProducts,addToCart})(ProductList)

const ProductListWarp = styled.div`
    display:flex;
    justify-content:center;
    flex-wrap: wrap;
`
