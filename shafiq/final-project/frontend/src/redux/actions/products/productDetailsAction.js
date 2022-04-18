import { getProductDetails } from "../../../utils/api/ProductApi";
import { SET_DETAILS_PRODUCTS } from "../../contants/action-type";

export const setProductDetails = (productId) => async (dispatch) => {
    
    const productDetails = await getProductDetails(productId);
    dispatch({
        type: SET_DETAILS_PRODUCTS,
        payload: productDetails
    })
}