import * as type from './CartTypeActions'
export const addToCart = (cart,product) =>{
    return (dispatch) =>{
        console.log(product)
        // coppy cart array
        const cartItems = cart.slice();
        // use alreadyInCart to check cart array
        let alreadyInCart = false;
        //
        cartItems.forEach((item) =>{
            if(item._id ===product._id){
                item.count ++;
                alreadyInCart = true
            }
        })
        if(!alreadyInCart){
            cartItems.push({...product})
        }
    dispatch ({
        type:type.ADD_TO_CART,
        payload:cartItems
    })
    localStorage.setItem('cartItems',JSON.stringify(cartItems))
}

}

export const removeFromCart = (cart,product) =>(dispatch)=>{
    
        const cartItems = cart.slice();
       let remove= cartItems.filter(item =>{
           return  item._id !==product._id;
        })
        dispatch({
            type:type.REMOVE_FROM_CART,
            payload:remove
        })
        localStorage.setItem('cartItems',JSON.stringify(remove))
    
   
}
export const handdleAddCount = (cart,currentCount)  =>(dispatch) =>{
   const cartItems = cart.slice();
    const index = cartItems.indexOf(currentCount);
    const result = [
        ...cartItems.slice(0,index),
       {...currentCount,count:currentCount.count+1},
        ...cartItems.slice(index+1)
    ]
   dispatch({
       type:type.ADD_COUNT,
       payload:result
   })
   localStorage.setItem('cartItems',JSON.stringify(result))
} 
export const handdleMinusCount = (cart,currentCount) =>dispatch =>{
    const cartItems = cart.slice();
    const index = cartItems.indexOf(currentCount);
    const result = [
        ...cartItems.slice(0,index),
        {...currentCount,count:currentCount.count -1},
        ...cartItems.slice(index +1)
    ];
    dispatch({
        type:type.MINUS_COUNT,
        payload:result
    })
    localStorage.setItem('cartItems',JSON.stringify(result))
}