import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './common/Header'
import MainLayout from './common/MainLayout'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Register from './pages/Register'
import Error404 from './common/Error404'
import ProductDetails from './pages/ProductDetails'
import MainContext from './pages/MainContext'


createRoot(document.getElementById('root')).render(

  <MainContext>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path='/' element={<Home />} />

          <Route path='/product' element={<Product />} />
          <Route path='/product-details/:pid' element={<ProductDetails />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<Error404 />} />
        </Route>

      </Routes>
    </BrowserRouter>
  </MainContext>
)
