import { useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import Context from "../context/Context";
import { CartItem } from "../components/CartItem";

export const Cart = () => {
  const navigate = useNavigate()
  const { cart, total } = useContext(Context)

  console.log(cart)

  return (
    <div className="flex flex-col items-center gap-8">
      <h1 className="text-6xl font-bold">Cart</h1>
      <ul className="flex flex-col items-center gap-8">
        {cart?.map((item, idx) => <CartItem  key={idx} item={item}/>)}
      </ul>
      <p className="font-bold">Shipping: FREE</p>
      <p className="font-bold">Total: ${total.toFixed(2)}</p>
      <button className="btn btn-primary" type="button" onClick={() => navigate('/checkout')}>Checkout</button>
    </div>
  )
}