import { ProductCard } from "./ProductCard"

export const ProductList = ({ plushies }) => {
	return (
		<div className="flex flex-row flex-wrap gap-6 justify-center">
			{plushies?.map(plushie => (
				<ProductCard key={plushie?._id} product={plushie} />
			))}
		</div>
	)
}