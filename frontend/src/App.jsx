import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Cart from "./pages/Cart"
import Login from "./pages/Login"
import Collection from "./pages/Collection"
import Product from "./pages/Product"
import PlacedOrder from "./pages/PlacedOrder"
import Orders from './pages/Orders'
import Footer from "./components/Footer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SearchBar from "./components/SearchBar"
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Verify from "./pages/Verify"

function App() {

  return (
    <>
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
          <ToastContainer />
          <Navbar />
          <SearchBar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/place-order" element={<PlacedOrder />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/verify" element={<Verify />} />
          </Routes>
          <Footer/>
      </div>
    </>
  )
}

export default App
