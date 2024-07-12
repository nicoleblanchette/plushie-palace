import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Nav } from './components/Nav'
import { Home } from './pages/Home'
import { Login } from './pages/Login';
import { SignUp } from './pages/Signup';
import { Checkout } from './pages/Checkout';
import { Product } from './pages/Product';
import { Cart } from './pages/Cart'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/products/:id' element={<Product />} />
        </Routes>
      </main>
    </>
  )
}

export default App
