import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Nav } from './components/Nav'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path='/' element={} />
          <Route path='/checkout' element={} />
        </Routes>
      </main>
    </>
  )
}

export default App
