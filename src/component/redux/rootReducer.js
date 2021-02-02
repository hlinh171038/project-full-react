import {combineReducers} from 'redux'
import {productReducer} from './Product/ProductReducer'
import {cartReducer} from './Cart/CartReducer'
import {orderReducer} from './Order/OrderReducer'
export const rootReducer = combineReducers({
    products:productReducer,
    cart:cartReducer,
    order:orderReducer
})