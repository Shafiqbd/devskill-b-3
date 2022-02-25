import axios from "axios";

export const getAllProduct = async () => {
  try {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    return data;
  } catch (err) {
    throw new Error(err);
  }
};

export const getProductDetailsById = (data) => {
  fetch(`https://fakestoreapi.com/products/${data.id}`)
    .then((res) => res.json())
    .then((json) => {
      return json;
    });
};
