import { useState, useEffect } from "react"
import { ProductCard } from "./ProductCard"

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

  useEffect(() => {
    //insert fetch logic
    setPlushies(mock)
  }, [])


  return (
    <>
      {plushies.map((plushie) => <ProductCard key={plushie?._id} product={plushie} />)}
    </>
  )
}