import axios from "./axios";

export const getProducts = async () => {
  const response = await axios.get("/product_manage");
  return response.data;
};

export const addProduct = async (product) => {
  const response = await axios.post("/product_manage", product);
  return response.data;
};

export const updateProduct = async (id, product) => {
  const response = await axios.put("/product_manage", {
    ...product,
    id: id,
  });
  return response.data;
};

export const deleteProduct = async (id) => {
  const response = await axios.delete(`/product_manage?id=${id}`);
  return response.data;
};
