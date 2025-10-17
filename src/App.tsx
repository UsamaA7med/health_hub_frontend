import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AllDoctors from './pages/AllDoctors'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<AllDoctors />} path="/all-doctors" />
      <Route element={<About />} path="/about" />
      <Route element={<Contact />} path="/contact" />
    </Routes>
  )
}

export default App
