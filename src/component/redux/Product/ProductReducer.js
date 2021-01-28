const initialState = {
    loading: false,
    data:[],
    error:''
}
export const productReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'FETCH_PRODUCT_REQUIRE':
            return {
                ...state,
                loading: true
            }
        case 'FETCH_PRODUCT_SUCCESS':
            return {
                ...state,
                loading: false,
                data:action.payload,
                error:''
            }
        case 'FETCH_PRODUCT_FAILURE':
            return {
                ...state,
                loading:false,
                data:[],
                error:action.payload
            }
        default:
            return state
    }
}