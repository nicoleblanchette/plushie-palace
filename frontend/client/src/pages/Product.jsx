import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { AddToCart } from "../components/AddToCart"
import { getProductById } from "../adapters/product-adapter"

export const Product = () => {
	const { id } = useParams()
	const [product, setProduct] = useState({})
	const [errorText, setErrorText] = useState("")

	useEffect(() => {
		const doFetch = async () => {
			const [plushie, error] = await getProductById(id)
			if (plushie) return setProduct(plushie[0])
			if (error) return setErrorText(error.message)
		}
		doFetch()
	}, [])

	return (
		<>
      <h1>{product?.plushieDetails?.title}</h1>
      {errorText && <p>{ errorText}</p>}
			<img src={product?.plushieDetails?.image} />
			<p>{product?.plushieDetails?.description}</p>
			<p>${product?.plushieDetails?.price}</p>
			<p>{product?.plushieDetails?.category}</p>
			<AddToCart product-id={product._id} />
		</>
	)
}
