import { fetchHandler, getPostOptions } from "../utils/utils";

const baseUrl = '/api/users'

export const createUser = async ({ username, password }) => (
  fetchHandler(baseUrl, getPostOptions({ username, password }))
);