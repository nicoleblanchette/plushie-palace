import { fetchHandler, getPostOptions } from "../utils/utils";

const baseUrl = 'http://localhost:3000/api/users'

export const createUser = async (formData) => {
  console.log('adapter entered')
  return fetchHandler(baseUrl, getPostOptions({ formData }));
};