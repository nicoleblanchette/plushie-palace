import { CategoryBar } from "../components/CategoryBar";
import { ProductList } from "../components/ProductList";
import { Searchbar } from "../components/Searchbar";
import { useState, useEffect } from "react";
import { getAllProducts } from "../adapters/product-adapter";

export const Home = () => {

  const [plushies, setPlushies] = useState([])
  const [errorText, setErrorText] = useState('')

  useEffect(() => {
    const doFetch = async () => {
      const [products, error] = await getAllProducts();
      if (products) return setPlushies(products)
      if (error) return setErrorText(error.message)
    }
    doFetch();

  }, [])

  return (
    <div className="flex flex-col items-center gap-4">
      <h1  className='text-4xl font-bold mb-3'>View Plushies</h1>
      <Searchbar setPlushies={setPlushies} setErrorText={setErrorText} />
      <h1 className="text-2xl font-semibold">Filter by Category:</h1>
      <CategoryBar setPlushies={setPlushies} setErrorText={setErrorText} />
      {errorText && <p>{ errorText}</p>}
      <ProductList plushies={plushies} />
    </div>
  )
}