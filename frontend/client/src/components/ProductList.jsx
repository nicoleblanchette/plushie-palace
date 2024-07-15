import { useState, useEffect } from "react"
import { ProductCard } from "./ProductCard"
import { getAllProducts } from "../adapters/product-adapter";

export const ProductList = () => {
  const mock = [
    {
      _id: "12",
      plushieDetails: {
        "title": 'Panda',
        category: 'Earth Animals',
        description: 'cuddly',
        price: 19.95,
        image: 'https://media.bergdorfgoodman.com/f_auto,q_auto:good,ar_5:7,c_fill,dpr_1.5,w_720/01/bg_4578523_100000_m'
      }
    }
  ]

  const [plushies, setPlushies] = useState([])
  const [errorText, setErrorText] = useState('')

  useEffect(() => {
    //insert fetch logic
    // setPlushies(mock)
    const doFetch = async () => {
      const [products, error] = await getAllProducts();
      if (products) return setPlushies(products)
      if (error) return setErrorText(error.message)
    }
    doFetch();

  }, [])


  return (
    <>
      {errorText && <p>{ errorText}</p>}
      {plushies?.map((plushie) => <ProductCard key={plushie?._id} product={plushie} />)}
    </>
  )
}