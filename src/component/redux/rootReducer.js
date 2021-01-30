import {combineReducers} from 'redux'
import {productReducer} from './Product/ProductReducer'
import {cartReducer} from './Cart/CartReducer'

export const rootReducer = combineReducers({
    products:productReducer,
    cart:cartReducer
})