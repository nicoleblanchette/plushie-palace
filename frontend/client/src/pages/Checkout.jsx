import { useState } from "react"
import { createOrder } from "../adapters/order-adapter";
import { useNavigate } from "react-router-dom";

export const Checkout = () => {
	// make all form inputs required
	//make form inputs accessible
  //adjust input types in some fields
  const navigate = useNavigate()
	const [formData, setFormData] = useState({
		first_name: "",
		last_name: "",
		email: "",
		shipping_address: "",
		credit_card: "",
		credit_exp: "",
		cvv: "",
		billing_address: "",
	})
	const [errorText, setErrorText] = useState("")

	const handleChange = event => {
		const { name, value } = event.target
		setFormData(prevData => ({
			...prevData,
			[name]: value,
		}))
	}

	const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(formData)
    const [order, error] = await createOrder(formData)
    if (error) return setErrorText(error.message)
    if (order) navigate("/confirmed")
	}

	return (
		<div className='flex flex-col items-center gap-8'>
      <h1 className='text-6xl font-bold'>Checkout</h1>
      {errorText && <p>{ errorText}</p>}
			<form
				className='flex flex-col gap-4 items-center w-4/5'
				onSubmit={handleSubmit}
			>
				<h2 className='text-2xl font-bold mt-5 text-primary'>Name</h2>
				<div className='flex gap-4'>
					<label className='form-control w-full max-w-xs'>
						<div className='label'>
							<span className='label-text'>First Name</span>
						</div>
						<input
							type='text'
							placeholder='Type here'
              className='input input-bordered w-full max-w-xs'
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              required
						/>
					</label>

					<label className='form-control w-full max-w-xs'>
						<div className='label'>
							<span className='label-text'>Last Name</span>
						</div>
						<input
							type='text'
							placeholder='Type here'
              className='input input-bordered w-full max-w-xs'
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              required
						/>
					</label>
				</div>
				<h2 className='text-2xl font-bold mt-5 text-primary'>Contact</h2>
				<div className='flex gap-4'>
					<label className='form-control w-full max-w-xs'>
						<div className='label'>
							<span className='label-text'>Email</span>
						</div>
						<input
							type='text'
							placeholder='Type here'
              className='input input-bordered w-full max-w-xs'
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
						/>
					</label>
					<label className='form-control w-full max-w-xs'>
						<div className='label'>
							<span className='label-text'>Shipping Address</span>
						</div>
						<input
							type='text'
							placeholder='Type here'
              className='input input-bordered w-full max-w-xs'
              value={formData.shipping_address}
              name="shipping_address"
              onChange={handleChange}
              required
						/>
					</label>
				</div>
				<h2 className='text-2xl font-bold mt-5 text-primary'>Billing</h2>
				<div className='flex gap-4'>
					<label className='form-control w-full max-w-xs'>
						<div className='label'>
							<span className='label-text'>Credit Card Number</span>
						</div>
						<input
							type='text'
							placeholder='Type here'
              className='input input-bordered w-full max-w-xs'
              name="credit_card"
              onChange={handleChange}
              value={formData.credit_card}
              required
						/>
					</label>

					<label className='form-control w-full max-w-xs'>
						<div className='label'>
							<span className='label-text'>Expiration Date</span>
						</div>
						<input
							type='text'
							placeholder='Type here'
              className='input input-bordered w-full max-w-xs'
              name="credit_exp"
              onChange={handleChange}
              value={formData.credit_exp}
              required
						/>
					</label>

					<label className='form-control w-full max-w-xs'>
						<div className='label'>
							<span className='label-text'>CVV</span>
						</div>
						<input
							type='text'
							placeholder='Type here'
              className='input input-bordered w-full max-w-xs'
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              required
						/>
					</label>

					<label className='form-control w-full max-w-xs'>
						<div className='label'>
							<span className='label-text'>Billing Address</span>
						</div>
						<input
							type='text'
							placeholder='Type here'
              className='input input-bordered w-full max-w-xs'
              onChange={handleChange}
              value={formData.billing_address}
              name="billing_address"
              required
						/>
					</label>
				</div>

				<button className='btn mt-5 btn-primary'>Checkout</button>
			</form>
		</div>
	)
}
