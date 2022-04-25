import { toastr } from "react-redux-toastr";
import { addProduct, productDelete, upateProduct } from "../../../utils/api/ProductApi";
import { ADD_PRODUCT, CHANGE_PRODUCT_INPUT, EDIT_PRODUCT } from "../../contants/action-type";
import { setProductList } from "./productListAction";

export const addProductInfo = (productData) => async (dispatch) => {
  const product = await addProduct(productData);
  dispatch({
    type: ADD_PRODUCT,
  });
  toastr.success("Product Save Successfully!!");
  
  // if (product.status === "error") {
  //   toastr.error(product.message);    
  // }else{
    
  // }
};

export const updateProductInfo = (productData, productId) => async (dispatch) => {
  const product = await upateProduct(productData, productId);
  if (product) {
    dispatch({
      type: EDIT_PRODUCT,
    });
    dispatch(setProductList("", "asc"));
    toastr.success("Product Update Successfully!!");
  }
  
  
};

export const getDeleteProduct = (productId) => async (dispatch) => {
  const product = await productDelete(productId);
  if (product) {
    dispatch(setProductList("", "asc"));
    toastr.success("Product Delete Successfully!!");
  }  
  
};


export const handleProductInputChange = (event) => (dispatch) => {
  const { name, value } = event.target;
  const inputData = {
    name,
    value,
  };
  dispatch({
    type: CHANGE_PRODUCT_INPUT,
    payload: inputData,
  });
};