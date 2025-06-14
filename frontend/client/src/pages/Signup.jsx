import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import Context from "../context/Context"
import { useNavigate } from "react-router-dom"
import { createUser } from "../adapters/user-adapter"

export const SignUp = () => {
	const navigate = useNavigate()
	const { setCurrentUser } = useContext(Context)
	const [formData, setFormData] = useState({
		username: "",
		password: "",
	})
	const [errorText, setErrorText] = useState("")

	const handleChange = event => {
		const { name, value } = event.target
		setFormData(prevData => ({
			...prevData,
			[name]: value,
		}))
	}

	const handleSubmit = async e => {
    e.preventDefault()
    console.log('submit')
    const [user, error] = await createUser(formData)
    console.log('j')
    console.log({user, error})
		if (error) return setErrorText(error.message)
		setCurrentUser(user)
		navigate(-1)
	}

	return (
		<div className='flex flex-col items-center gap-6'>
			<h1 className='text-6xl font-bold my-6'>Sign Up</h1>
			<form
				className='flex flex-col items-center gap-3'
				onSubmit={handleSubmit}
			>
				<label className='input input-bordered flex items-center gap-2'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 16 16'
						fill='currentColor'
						className='h-4 w-4 opacity-70'
					>
						<path d='M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z' />
						<path d='M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z' />
					</svg>

					<input
						type='text'
						className='grow'
						placeholder='Username'
						name='username'
						value={formData.username}
						onChange={handleChange}
						required
					/>
				</label>
				<label className='input input-bordered flex items-center gap-2'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 16 16'
						fill='currentColor'
						className='h-4 w-4 opacity-70'
					>
						<path
							fillRule='evenodd'
							d='M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z'
							clipRule='evenodd'
						/>
					</svg>
					<input
						type='password'
						className='grow'
						placeholder='Password'
						name='password'
						value={formData.password}
						onChange={handleChange}
						required
					/>
				</label>
				<button className='btn btn-primary'>Sign Up</button>
			</form>
      {errorText && <p>{errorText}</p>}
      <div className="flex flex-col">
      <p>Already a member?</p>
      <button className="btn-link">
        <Link to={"/login"}>Login!</Link>
        </button>
        </div>
		</div>
	)
}
