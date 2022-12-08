import axios from "./axios";

export const getProductbyCategory = async (
  category,
  page,
  limit,
  suggest = false
) => {
  const response = await axios.get(
    `/product_list?${
      category ? `category=${category}&` : ""
    }pageSize=${limit}&pageNumber=${page}${
      suggest ? `&suggest=${suggest}` : ""
    }`
  );
  return response.data;
};
