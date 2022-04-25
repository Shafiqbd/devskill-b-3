import authHeader from "../../hooks/authHeader";
import FetchApi from "./index";

export const addProduct = async (productData) => {
  try {
    authHeader();
    const { data } = await FetchApi.post(`/products`, 
    JSON.stringify({
      title: productData.title,
      price: parseFloat(productData.price),
      description: productData.description,
      image: productData.image,
      stock:  parseFloat(productData.stock),
      category: {
          _id: productData.category._id,
      },
    })
    );
    return data;
  } catch (err) {
    throw new Error(err);
  }
};

export const upateProduct = async (productData, productId) => {
  try {
    authHeader();
    debugger;
    const { data } = await FetchApi.patch(`/products/${productId}`, 
    JSON.stringify({
      title: productData.title,
      price: parseFloat(productData.price),
      description: productData.description,
      image: productData.image,
      stock:  parseFloat(productData.stock),
      category: {
          _id: productData.category._id,
      },
    })
    );
    return data;
  } catch (err) {
    throw new Error(err);
  }
};

export const productDelete = async (productId) => {
  try {
    authHeader();
    debugger
    const { data } = await FetchApi.delete(`/products/${productId}`);
    return data;
  } catch (err) {
    throw new Error(err);
  }
};

export const getAllProductList = async (sorting) => {
  try {
    const { data } = await FetchApi.get(`/products`, {
      params: {
        sort: sorting,        
      }
    });
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
