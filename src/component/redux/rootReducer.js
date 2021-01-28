import {combineReducers} from 'redux'
import {productReducer} from './Product/ProductReducer'

export const rootReducer = combineReducers({
    products:productReducer
})