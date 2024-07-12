export const Checkout = () => {
  // make all form inputs required
  //make form inputs accessible
  //adjust input types in some fields
  const [formData, setFormData] = useState({
   
  })
  const [errorText, setErrorText] = useState('')

	const handleChange = event => {
		const { name, value } = event.target
		setFormData(prevData => ({
			...prevData,
			[name]: value,
		}))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const [user, error] = logUserIn(formData)
    if (error) return setErrorText(error.message)
    setCurrentUser(user)
    navigate(-1)
  }

	return (
		<>
			<h1>Checkout</h1>
			<form onSubmit={handleSubmit}>
				<label className='form-control w-full max-w-xs'>
					<div className='label'>
						<span className='label-text'>First Name</span>
					</div>
					<input
						type='text'
						placeholder='Type here'
						className='input input-bordered w-full max-w-xs'
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
					/>
        </label>
        
        <label className='form-control w-full max-w-xs'>
					<div className='label'>
						<span className='label-text'>Email</span>
					</div>
					<input
						type='text'
						placeholder='Type here'
						className='input input-bordered w-full max-w-xs'
					/>
        </label>
        
        <label className='form-control w-full max-w-xs'>
					<div className='label'>
						<span className='label-text'>Credit Card Number</span>
					</div>
					<input
						type='text'
						placeholder='Type here'
						className='input input-bordered w-full max-w-xs'
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
					/>
        </label>
        
        <button className="btn">Checkout</button>
			</form>
		</>
	)
}
