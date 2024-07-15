import { ProductCard } from "./ProductCard"

export const ProductList = ({ plushies }) => {
	return (
		<div className="flex flex-row flex-wrap gap-4">
			{plushies?.map(plushie => (
				<ProductCard key={plushie?._id} product={plushie} />
			))}
		</div>
	)
}