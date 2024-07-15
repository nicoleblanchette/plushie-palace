import { fetchHandler, getPostOptions, deleteOptions } from "../utils/utils";
// double check with MLS auth template to make this work on the backend
const baseUrl = 'http://localhost:3000/api';

export const checkForLoggedInUser = async () => {
	const [data] = await fetchHandler(`${baseUrl}/me`)
	return data
}

export const logUserIn = async ({ username, password }) => {
  console.log(username, password)
  return fetchHandler(`${baseUrl}/login`, getPostOptions({ username, password }));
}

// the logout route pretty much can't fail with our setup, but if yours can, change this
export const logUserOut = async () => {
  await fetchHandler(`${baseUrl}/logout`, deleteOptions);
  return true;
};

export default checkForLoggedInUser;