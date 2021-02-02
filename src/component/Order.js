import React,{useState} from 'react'
import { Button,Label,Input,FormGroup,Form } from 'reactstrap';
import {connect} from 'react-redux';
import {createOrder,clearOrder} from './redux/Order/OrderActions'
import Fade from 'react-reveal/Fade';
import Modal from 'react-modal';
// modal
const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

function Order({cartItems,createOrder,order,clearOrder}) {
    const [email,setEmail] = useState('');
    const [name,setName] = useState('');
    const [address,setAddress] = useState('');
    
    //modalopen
  
    //modalClose
    function closeModal(){
        clearOrder()
      }
     function handleChangeEmail(e){
         setEmail(e.target.value)
     }
     function handleChangeName(e){
        setName(e.target.value)
    }
    function handleChangeAddress(e){
        setAddress(e.target.value)
    }
    const submitCreateOrder = (e) => {
        e.preventDefault();
        const order ={
            email,
            name,
            address,
            cartItems,
            total:cartItems.reduce((a,c)=>a + c.price * c.count,0)
        }
        console.log(order)
        createOrder(order)
    }
    return (
        <div className="checkout w-100 mt-3">
            
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" name="email"  placeholder="type your email" onChange={handleChangeEmail}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input type="name" name="name"  placeholder="type your name" onChange={handleChangeName}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="address">Address</Label>
                        <Input type="address" name="address"  placeholder="type your address" onChange={handleChangeAddress}/>
                    </FormGroup>
                    <Button onClick={submitCreateOrder}>Check out</Button>    
            
            <p>{order && order.email}</p>
            {order && <Modal
                isOpen={true}
                onRequestClose={closeModal}
                style={customStyles}
            >
               <div className="m-5">
                <p className="text-primary font-root-title text-center">You order has been placed.</p>
                    <h2 className="text-center mb-5"><span className="font-root-content">Order</span>:<span className="text-muted">{order._id}</span></h2>
                    <div> <span className="font-root-content text-muted font-weight-bold mr-3">Name:</span> <span>{order.name}</span></div>
                <div><span className="font-root-content text-muted font-weight-bold mr-3">Email:</span> <span>{order.email}</span></div>
                <div> <span className="font-root-content text-muted font-weight-bold mr-3">Total:</span> <span className="text-primary mr-2">{order.total}</span>VND</div>
                    <div><span className="font-root-content text-muted font-weight-bold mr-3">Date:</span> <span>{order.name}</span></div>
                    <span className="font-root-content text-muted font-weight-bold mr-3">Items:</span> <span className="font-root-content">Items:{order.cartItems.map(item =>{
                        return <div>{item.title} x {item.count}</div>
                    })}</span>
               </div>
                </Modal>}
        </div>
    )
 }
export default connect((state)=>({
    order:state.order.order,
    cartItems:state.cart.cartItems
}),{
    createOrder,
    clearOrder
})(Order)
