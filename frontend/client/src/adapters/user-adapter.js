import { fetchHandler, getPostOptions } from "../utils/utils";

const baseUrl = 'http://localhost:3000/api/users'

export const createUser = async (formData) => {
  return fetchHandler(baseUrl, getPostOptions(formData));
};