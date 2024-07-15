import { fetchHandler} from "../utils/utils";

const baseUrl = 'http://localhost:3000/api/products'
//get all products
export const getAllProducts = async () => (
  fetchHandler(baseUrl)
)

//get by category
export const getProductsByCategory = async(category) => (
  fetchHandler(`${baseUrl}/products/category/${category}`)
)

//get by id
export const getProductById = async (id) => (
  fetchHandler(`${baseUrl}/products/${id}`)
)

//get by search
export const getProductsBySearch = async (search) => (
  fetchHandler(`${baseUrl}/products/search/${search}`)
)

//get by AI/ML algorithm
export const getRecommendedProducts = async () => {}