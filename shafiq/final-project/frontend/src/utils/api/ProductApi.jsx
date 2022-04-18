import FetchApi from "./index";

export const getAllProductList = async () => {
  try {
    const { data } = await FetchApi.get(`/products`);
    return data;
  } catch (err) {
    throw new Error(err);
  }
};
export const getCategoryByProductList = async (categoryId) => {
  try {
    const { data } = await FetchApi.get(`/products/category/${categoryId}`);
    return data;
  } catch (err) {
    throw new Error(err);
  }
};

export const getProductDetails = async (productId) => {
  try {
    const { data } = await FetchApi.get(`/products/${productId}`);
    return data;
  } catch (err) {
    throw new Error(err);
  }
};
