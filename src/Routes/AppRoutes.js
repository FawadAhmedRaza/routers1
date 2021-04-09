import React from 'react'
import Home from '../components/Home'
import About from '../components/About'
import Contact from '../components/Contact'
import ProductDetails from '../components/ProductDetails'
import { Route, Routes } from 'react-router'

export default function AppRoutes() {
    return (
      <Routes>
      <Route path='/Products'><Home/></Route>
      <Route path='/about'><About/></Route>
     
      <Route path='/contact'></Route>
      <Route path='/Products/:id'><ProductDetails/></Route>
 
      </Routes>
    )
}
