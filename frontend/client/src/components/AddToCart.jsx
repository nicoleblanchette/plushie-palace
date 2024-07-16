import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import Context from "../context/Context"

export const AddToCart = ({product}) => {
	 const { currentUser, cart, setCart, setTotal } = useContext(Context)
	const navigate = useNavigate()
	//check if there is a logged in user. if user is not logged in redirect to log in/sign up
	// if you would like the user's cart data to persist then we'll need to send a request to the backend
	const handleClick = () => {
    if (!currentUser) return navigate(`/login`)
    setCart([...cart, product])
    setTotal(prev => prev + product.plushieDetails.price)
    console.log(cart)
	}

	return (
		<button type='button' className='btn btn-primary' onClick={handleClick}>
			Add to Cart
		</button>
	)
}
