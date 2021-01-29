import React from 'react'
import {connect} from 'react-redux'
import {filterProducts,sortProducts} from './redux/Product/ProductActions'
function Filter({filterProducts,sortProducts,size,sort,products,filteredItems}) {
    return (
        <div className="">
            <h5>All The Current Product</h5>
            <div className="filter-result ml-3">Product :{filteredItems && filteredItems.length}</div>
            <h5>Filter Product To Price</h5>
            <div className="filter-sort ml-5">
                <select value ={sort} onChange={(e)=>sortProducts(filteredItems,e.target.value)}>
                    <option value="">Nomal</option>
                    <option value="lowest">Lowest</option>
                    <option value="highest">Hightest</option>
                </select>
            </div>
            <h5>Filter Product To Size</h5>
            <div className="filter-size ml-5">
            <select value={size} onChange={(e)=>filterProducts(products,e.target.value)}>
                <option value="">ALL</option>
                <option value="XXL">XXL</option>
                <option value="S">S</option>
                <option value="L">L</option>
                <option value="M">M</option>
            </select>
            </div>

        </div>
    )
}
export default connect((state) =>({
    size:state.products.size,
    sort:state.products.sort,
    products:state.products.items,
    filteredItems:state.products.filteredItems
}),{
    filterProducts,
    sortProducts
})(Filter)
