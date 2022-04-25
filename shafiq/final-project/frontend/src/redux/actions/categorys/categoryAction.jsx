import { toastr } from "react-redux-toastr";
import { addCategory, categoryDelete, getAllCategoryList, updateCategory } from "../../../utils/api/CategoryApi";
import { ADD_CATEGORY, CHANGE_CATEGORY_INPUT, EDIT_CATEGORY, SET_CATEGORY } from "../../contants/action-type";
export const addCategoryInfo = (categoryData) => async (dispatch) => {
  const category = await addCategory(categoryData);

  if (category) {
    dispatch({
      type: ADD_CATEGORY,
    });
    toastr.success("Category Save Successfully!!");
  }
};
export const updateCategoryInfo = (categoryData, categoryId) => async (dispatch) => {
  const category = await updateCategory(categoryData, categoryId);

  if (category) {
    dispatch({
      type: EDIT_CATEGORY,
    });
    toastr.success("Category Update Successfully!!");
  }
};

export const getDeleteCategory = (cattId) => async (dispatch) => {
  const category = await categoryDelete(cattId);
  debugger;
  if (category) {
    const categoryList = await getAllCategoryList();
    dispatch({
      type: SET_CATEGORY,
      payload: categoryList,
    });

    toastr.success(category.message);
  }
};

export const handleCategoryInputChange = (event) => (dispatch) => {
  const { name, value } = event.target;
  const inputData = {
    name,
    value,
  };
  dispatch({
    type: CHANGE_CATEGORY_INPUT,
    payload: inputData,
  });
};
