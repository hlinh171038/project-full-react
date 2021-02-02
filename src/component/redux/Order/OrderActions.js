import { CLEAR_CART, CLEAR_ORDER, CREATE_ORDER } from "./OrderTypeAction"
import axios from 'axios'
    
    export const createOrder = (order) => (dispatch) =>{
         fetch('http://localhost:8000/order', {
             method:"POST",
             headers: {
                 "Content-Type":"application/json",
             },
             body: JSON.stringify(order),
         })
         .then((res)=> res.json())
         .then((data) => {
             console.log('data',data)
             dispatch({ type:CREATE_ORDER,payload:data});
             //clear cart items
             localStorage.clear('cartItems')
            
         });
    };

export const clearOrder = () =>(dispatch) =>{
    dispatch({type:CLEAR_ORDER});
    dispatch({type:CLEAR_CART});
};