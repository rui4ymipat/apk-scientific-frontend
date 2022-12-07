import axios from "./axios";

export const getBrands = async () => {
  const response = await axios.get("/brand");
  return response.data;
};

export const setBrand = async (brand) => {
  const response = await axios.post("/brand", brand);
  return response.data;
};

export const getPublicData = async () => {
  const response = await axios.get("/public_data_category");
  return response.data;
};
