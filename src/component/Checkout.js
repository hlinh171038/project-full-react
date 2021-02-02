import React from 'react'
import {connect} from 'react-redux'

function Checkout({cartItems}) {
    return (
        <div className="w-100 text-center" style={{"justify-content":"center"}}>
            <span className="text-primary font-root-title text-center font-weight-bold" style={{"font-size":"200 px"}}>Total:
            </span> {cartItems && cartItems.reduce((a,c) => a+c.price *c.count,0)}
            <span>VND</span>
        </div>
    )
}

export default connect(
    (state) =>({
        cartItems:state.cart.cartItems
    })
)(Checkout)
