import authHeader from "../../hooks/authHeader";
import FetchApi from "./index";

export const getAllCategoryList = async () => {
  try {
    const { data } = await FetchApi.get(`/category`);
    return data;
  } catch (err) {
    throw new Error(err);
  }
};

export const categoryDelete = async (catId) => {
  try {
    authHeader();
    const { data } = await FetchApi.delete(`/category/${catId}`);
    return data;
  } catch (err) {
    throw new Error(err);
  }
};

export const getCategoryDetails = async (categoryId) => {
  try {
    const { data } = await FetchApi.get(`/category/${categoryId}`);
    return data;
  } catch (err) {
    throw new Error(err);
  }
};
export const addCategory = async (categoryData) => {
  try {
    authHeader();
    const { data } = await FetchApi.post(
      `/category`,
      JSON.stringify({
        name: categoryData.name,
        description: categoryData.description,
      })
    );
    return data;
  } catch (err) {
    throw new Error(err);
  }
};
export const updateCategory = async (categoryData, categoryId) => {
  try {
    authHeader();
    const { data } = await FetchApi.patch(
      `/category/${categoryId}`,
      JSON.stringify({
        name: categoryData.name,
        description: categoryData.description,
      })
    );
    return data;
  } catch (err) {
    throw new Error(err);
  }
};
