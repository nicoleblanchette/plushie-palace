import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Nav } from './components/Nav'
import { Home } from './pages/Home'
import { Login } from './pages/Login';
import { SignUp } from './pages/Signup';
import { Checkout } from './pages/Checkout';
import { Product } from './pages/Product';
import { Cart } from './pages/Cart'
import { Confirmed } from './pages/Confirmed';

function App() {

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
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/products/:id' element={<Product />} />
          <Route path='/confirmed' element={<Confirmed />} />
        </Routes>
      </main>
    </>
  )
}

export default App
