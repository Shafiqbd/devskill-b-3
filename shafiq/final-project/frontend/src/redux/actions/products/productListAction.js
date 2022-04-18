import { getAllProductList, getCategoryByProductList } from "../../../utils/api/ProductApi";
import { SET_PRODUCTS } from "../../contants/action-type";

export const setProductList = (categoryId) => async (dispatch) => {
    
    const productList = categoryId ? await getCategoryByProductList(categoryId) : await getAllProductList();
    dispatch({
        type: SET_PRODUCTS,
        payload: productList
    })
}