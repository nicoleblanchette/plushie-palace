import { getAllProducts, getProductsByCategory } from "../adapters/product-adapter"

export const CategoryBar = ({ setPlushies, setErrorText }) => {
	//send a fetch req to reset plushies on click

  const handleCategorySwitch = async category => {
    if (category === 'all') {
      const [plushies, error] = await getAllProducts()
      if (plushies) return setPlushies(plushies)
      if (error) return setErrorText(error.message)
    }

		const [plushies, error] = await getProductsByCategory(category)
		if (plushies) return setPlushies(plushies)
		if (error) return setErrorText(error.message)
	}

	return (
		<div className='flex flex-row gap-4'>
			<button className='btn btn-primary' onClick={() => handleCategorySwitch("all")}>
				All
			</button>
			<button className='btn btn-primary' onClick={() => handleCategorySwitch("earth")}>
				Earth
			</button>
			<button className='btn btn-primary' onClick={() => handleCategorySwitch("air")}>
				Air
			</button>
			<button className='btn btn-primary' onClick={() => handleCategorySwitch("sea")}>
				Sea
			</button>
			<button className='btn btn-primary' onClick={() => handleCategorySwitch("XL")}>
				XL
			</button>
		</div>
	)
}
