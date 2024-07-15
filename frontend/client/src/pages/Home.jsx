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
    <>
      <Searchbar setPlushies={setPlushies} setErrorText={setErrorText} />
      <CategoryBar setPlushies={setPlushies} setErrorText={setErrorText} />
      {errorText && <p>{ errorText}</p>}
      <ProductList plushies={plushies} />
    </>
  )
}