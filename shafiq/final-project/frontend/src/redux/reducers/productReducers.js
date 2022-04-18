import { SET_DETAILS_PRODUCTS, SET_PRODUCTS } from "../contants/action-type";

const initialState = {
    productList: [],
    details:{}
}
export const productReducers = (state= initialState, {payload, type}) => {
    switch (type)
    {
        case SET_PRODUCTS:
            return {...state, productList: payload};
            break;
        case SET_DETAILS_PRODUCTS:
            return {...state, details: payload};
            break;
        default:
            return state;
    }
}