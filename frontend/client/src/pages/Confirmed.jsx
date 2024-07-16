import { useNavigate } from "react-router-dom";

export const Confirmed = () => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col items-center justify-center gap-12">
      <h1 className="text-6xl font-bold">Order Confirmed!</h1>
      <button className="btn btn-primary" onClick={() => navigate('/')}>Home</button>
    </div>
  )
}