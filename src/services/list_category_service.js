import axios from "./axios";

export const getCategoryList = async (category) => {
  const response = await axios.get(`/list_category`);
  return response.data;
};

export const addCategory = async (category) => {
  const response = await axios.post("/list_category", category);
  return response.data;
};
