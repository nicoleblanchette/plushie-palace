import { useNavigate } from "react-router-dom"

export const ProductCard = ({ product }) => {
  const navigate = useNavigate()

  return (
    <div className="card bg-base-100 w-96 shadow-xl" onClick={() => navigate(`/products/${product._id}`)}>
  <figure>
    <img
      src={product.plushieDetails.image}
      alt={product.plushieDetails.title} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
    {product.plushieDetails.title}
      {/* <div className="badge badge-secondary">NEW</div> */}
    </h2>
        <p>${product.plushieDetails.price}</p>
    <div className="card-actions justify-end">
      {/* <div className="badge badge-outline">Fashion</div> */}
          <div className="badge badge-outline">{ product.plushieDetails.category}</div>
    </div>
  </div>
</div>
  )
}