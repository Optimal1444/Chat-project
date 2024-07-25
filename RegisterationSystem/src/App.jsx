
import { Route, Routes } from 'react-router-dom'
import './output.css'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Profile from './components/Profile'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Product from './components/Product'
import ShowCart from './components/ShowCart'
import Contact from './components/Contact'
function App() {
  
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>  
        <Route path='/home' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<ShowCart />} />
        <Route path='/contact' element={<Contact />} /> 
      </Routes>
    </>
  )
}

export default App
