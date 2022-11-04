import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Dashboard from './components/Dashboard'
import Imager from './components/Imager'

import Login from './components/Login'
import LogReg from './components/LogReg'
import Register from './components/Register'
import AddCategory from './pages/category/AddCategory'
import Category from './pages/category/Category'
import Customer from './pages/Customer'

import Details from './pages/Details'
import Orders from './pages/Orders'
import Products from './pages/product/Products'
import Security from './security/security'
import SiteHome from './pages/SiteHome'
import ProCut from './pages/product/ProCut'
import AddProduct from './pages/product/AddProduct'
import UpdateProduct from './pages/product/UpdateProduct'

// import components

// Security



export const routes =
    <BrowserRouter>
        <ToastContainer />
        <Routes>
            <Route path='/admin' element={<Login />} />
            <Route path='/update/:pid' element={<UpdateProduct />} />
            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/sitehome' element={<SiteHome />} />
            <Route path='/login' element={<Login />} />
            <Route path='/addproduct' element={<Security component={<AddProduct />} />} />
            <Route path='/orders' element={<Security component={<Orders />} />} />         
            <Route path='/imager/:pid' element={<Security component={<Imager />} />} />
            <Route path='/dashboard' element={<Security component={<Dashboard />} />} />
            <Route path='/products' element={<Security component={<Products />} />} />
            <Route path='/details/:pid' element={<Security component={<Details />} />} />
            <Route path='/category' element={<Security component={<Category />} />} />
            <Route path='/addcategory' element={<Security component={<AddCategory />} />} />
            <Route path='/customer' element={<Security component={<Customer />} />} />
            <Route path='/procut/:cid' element={<Security component={<ProCut />} />} />
           
            {/* <Route path='*' element={ <Navigate to='/' /> }></Route> */}
        </Routes>
    </BrowserRouter>
