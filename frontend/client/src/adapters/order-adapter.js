import { fetchHandler, getPostOptions } from "../utils/utils";

const baseUrl = 'http://localhost:3000/api/orders'

export const createOrder = async (formData) => (
  fetchHandler(baseUrl, getPostOptions(formData))
)