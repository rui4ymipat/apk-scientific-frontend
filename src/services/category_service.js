import axios from "./axios";

export const getCategory = async () => {
  const response = await axios.get("/manage_category");
  return response.data;
};

export const addCategory = async (category) => {
  const response = await axios.post("/manage_category", category);
  return response.data;
};

export const updateCategory = async (category) => {
  const response = await axios.put("/manage_category", category);
  return response.data;
};

export const deleteCategory = async (id) => {
  const response = await axios.delete(`/manage_category?id=${id}`,);
  return response.data;
};
