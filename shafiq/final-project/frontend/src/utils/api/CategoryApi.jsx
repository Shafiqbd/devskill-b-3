import FetchApi from "./index";

export const getAllCategoryList = async () => {
  try {
    const { data } = await FetchApi.get(`/category`);
    return data;
  } catch (err) {
    throw new Error(err);
  }
};
