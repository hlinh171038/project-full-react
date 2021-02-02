
export const cartReducer = (state ={
    cartItems:JSON.parse(localStorage.getItem('cartItems')) || [],
    },action) =>{
    switch(action.type){
        case 'ADD_TO_CART':
            return {
                ...state,
                cartItems:action.payload,
            }
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cartItems:action.payload
            }
        case 'CLEAR_CART':
            return {
                ...state,
                cartItems:[]
            }
        case 'ADD_COUNT':
            return {
                ...state,
                cartItems:action.payload
            }
        case 'MINUS_COUNT':
                return {
                    ...state,
                    cartItems:action.payload
                }
        default:
            return state
    }
}