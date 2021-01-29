import * as type from './ProductTypeAction'
import axios from 'axios'
export const fetchProducts =() =>async(dispatch) =>{
   const res = await axios.get('http://localhost:8000/product');
    dispatch ({
        type: type.FETCH_PRODUCTS,
        payload:res.data
    })
}
export const filterProducts = (products,size) =>{
    let items = [];
   items = size ==="" ?products:products.filter(x=>x.availableSizes.indexOf(size) >=0)
    return (dispatch) =>{
        dispatch({
            type:type.FILTER_PRODUCTS_BY_SIZE,
            payload: {
                size: size,
                items: items
            }
        })
        console.log(items);
       
    }
   
}
export const sortProducts =(filterProducts,sort)=>{
    //coppy
    const sortedProducts = filterProducts.slice();
    //comlement
    if(sort ===""){
        sortedProducts.sort((a,b)=>(a._id>b._id? 1 : -1))
    }else {
        sortedProducts.sort((a,b) =>
            sort ==="lowestprice"
                ? a.price > b.price
                    ? 1
                    : -1
                :a.price > b.price
                    ? -1
                    : 1
        );
    }
    return (dispatch) =>{
       dispatch({
        type:type.ORDER_PRODUCTS_BY_PRICE,
        payload: {
            sort:sort,
            items:sortedProducts
        }
       })
    }
}