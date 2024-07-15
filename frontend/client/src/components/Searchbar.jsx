import { useState } from "react";
import { getProductsBySearch } from "../adapters/product-adapter";

export const Searchbar = ({setPlushies, setErrorText}) => {
  const [query, setQuery] = useState('')
  const handleSubmit = async () => {
    const [plushies, error] = await getProductsBySearch(query)
    if (plushies) return setPlushies(plushies)
    if (error) return setErrorText(error.message)
  }



  return (
    <>
      <input type="text" onChange={(e) => setQuery(e.target.value)} value={ query} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
      <button className="btn" onClick={handleSubmit}>Search</button>
  </>
      )
}