import { useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import Context from "../context/Context";
import { CartItem } from "../components/CartItem";

export const Cart = () => {
  const navigate = useNavigate()
  const { cart } = useContext(Context)
  const [total, setTotal] = useState(0)

  return (
    <>
      <h1>Cart</h1>
      <ul>

        {cart?.map((item) => {
        setTotal((prev => prev + 1))
        return <CartItem item={item} />;
        } )}
      </ul>
      <p>Total: ${total}</p>
      <button className="btn" type="button" onClick={() => navigate('/checkout')}>Checkout</button>
    </>
  )
}