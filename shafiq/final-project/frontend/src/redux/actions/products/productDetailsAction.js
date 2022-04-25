import { getBase64Image } from "../../../components/common/convertBase64Image";
import { GlobalVariable } from "../../../UtilityClass/ApiConnectionClass";
import { getProductDetails } from "../../../utils/api/ProductApi";
import { SET_DETAILS_PRODUCTS, SET_PRODUCT_MODEL } from "../../contants/action-type";

export const setProductDetails = (productId) => async (dispatch) => {
    
    const productDetails = await getProductDetails(productId);
    dispatch({
        type: SET_DETAILS_PRODUCTS,
        payload: productDetails
    })
}
export const setSingleProductModel = (productId) => async (dispatch) => {
    const apiRootUrl = GlobalVariable.LOCAL_API_URL;  
    const productDetails = await getProductDetails(productId);
    if (productDetails) {
        debugger;
        if (productDetails.image) {
            getBase64Image(`${apiRootUrl}${productDetails.image}`)
            .then(async (res) => {
                productDetails.image = res;
                dispatch({
                    type: SET_PRODUCT_MODEL,
                    payload: productDetails
                });
            })
            .catch((err) => {
                console.log(err);
            });
        }else{
            dispatch({
                type: SET_PRODUCT_MODEL,
                payload: productDetails
            });
        }
        
    }
    
}