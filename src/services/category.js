import axios from "./axios";

export const getCategory = async (category) => {
  const response = await axios.get(
    `/product_list${category ? `?category=${category}` : ""}`
  );
  return response.data;
};
