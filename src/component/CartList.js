import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {removeFromCart} from './redux/Cart/CartActions'
function CartList({cartItems,removeFromCart}) {
    return cartItems.length===0 ?(
        <h2 className="m-5 text-primary text-center">Cart is empty</h2>
    ):(
        <CartWarap className="row">
            <table className="col-md-8 text-center">
                <tr>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Title</th>
                    <th>Size</th>
                    <th>Number</th>
                    <th>Remove</th>
                </tr>
                {cartItems && cartItems.map(item =>{
                    return<tr>
                        <td><img  src={item.image} width="50px" height="50px" /></td>
                        <td> <span>{item.price} VND</span></td>
                        <td><p>{item.title}</p></td>
                        <td> 
                            {item.availableSizes.map(item =>{
                                return <button>{item}</button>
                            })}
                        </td>
                        <td>
                            <button>+</button>
                            <span>{item.count}</span>
                            <button>-</button>
                        </td>
                        <td> <button color="secondary"  onClick={() =>removeFromCart(cartItems,item)}>X</button></td>
                    </tr> 
                        
                })}
              
            </table>
            <div className="col-md-4">Order</div>
        </CartWarap>
    )
}
export default connect((state) =>({
    cartItems:state.cart.cartItems
}),{
    removeFromCart
})(CartList)

const CartWarap =  styled.div`
    margin:7%
`