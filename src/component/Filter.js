import React from 'react'

function Filter() {
    return (
        <div className="d-flex mt-3 ml-4  ">
            <div className="filter-result ml-3">Product :0</div>
            <div className="filter-sort ml-5">
                order
                <select >
                    <option value="">Nomal</option>
                    <option value="lowest">Lowest</option>
                    <option value="highest">Hightest</option>
                </select>
            </div>
            <div className="filter-size ml-5">
            <select >
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

export default Filter
