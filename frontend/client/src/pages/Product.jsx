import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { AddToCart } from "../components/AddToCart";

export const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({})

  const mock = {
      _id: "12",
      plushieDetails: {
        "title": 'Panda',
        category: 'Earth Animals',
        description: 'cuddly',
        price: 19.95,
        image: 'https://media.bergdorfgoodman.com/f_auto,q_auto:good,ar_5:7,c_fill,dpr_1.5,w_720/01/bg_4578523_100000_m'
      }
    }


  useEffect(() => {
    //insert fetch logic
    setProduct(mock)
  }, [])

  return (
    <>
      <h1>{product?.plushieDetails?.title}</h1>
      <img src={product?.plushieDetails?.image} />
      <p>{product?.plushieDetails?.description}</p>
      <p>${product?.plushieDetails?.price}</p>
      <p>{product?.plushieDetails?.category}</p>
      <AddToCart product-id={product._id } />
    </>
  )
}