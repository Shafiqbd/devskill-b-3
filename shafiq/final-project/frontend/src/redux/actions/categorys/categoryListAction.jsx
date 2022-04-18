import { getAllCategoryList } from "../../../utils/api/CategoryApi";
import { SET_CATEGORY, SET_SINGLE_CATEGORY } from "../../contants/action-type";

export const setCategoryList = () => async (dispatch) => {
    
    const categoryList = await getAllCategoryList();
    dispatch({
        type: SET_CATEGORY,
        payload: categoryList
    })
}
export const setSingleCategory = (category) => {    
    return{
        type: SET_SINGLE_CATEGORY,
        payload: category
    }
}