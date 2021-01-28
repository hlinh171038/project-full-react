import * as type from './ProductTypeAction'
import axios from 'axios'
export const fetchProductRequire = () =>{
    return {
        type:type.FETCH_PRODUCT_REQUIRE
    }
}
export const fetchProductSuccess = (product) =>{
    return {
        type:type.FETCH_PRODUCT_SUCCESS,
        payload:product
    }
}
export const fetchProductFailure = (error) =>{
    return {
        type:type.FETCH_PRODUCT_FAILURE,
        payload:error
    }
}
export const fetchProduct = () =>{
    return (dispatch) =>{
        dispatch(fetchProductRequire())
        axios.get('http://localhost:8000/product')
        .then(response =>{
            // call product API
            const product = response.data;
            console.log("product",product)
            dispatch(fetchProductSuccess(product))
        })
        .catch(error =>{
            const msg = error.message
            dispatch(fetchProductFailure(msg))
        })
    }
}