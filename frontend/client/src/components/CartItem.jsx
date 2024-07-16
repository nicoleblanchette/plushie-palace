export const CartItem = ({item}) => {
  return (
    <div className="flex justify-center items-center gap-6">
      <img className="object-contain w-10 rounded-md" src={item.plushieDetails.image} />
  
        <h2 className="font-bold">{item.plushieDetails.title}</h2>
        <p>${item.plushieDetails.price }</p>
    
  </div>
)
}