import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'
import Pnf from "./component/Pnf"
import Home from "./component/Home"
import Menu from "./Header/Menu"
import Footer from "./Header/Footer"
import About from "./component/About"
import Profile from "./component/Profile"
import Portfolio from "./component/Portfolio"
import Contact from "./component/Contact"


 function App() {
  return (
    <BrowserRouter>
          <Menu/>
        <Routes>
           <Route path={`/`} element={<Home/>} />
           <Route path={`/home`} element={<Home/>} />
           <Route path={`/about`} element={<About/>} />
           <Route path={`/profile`} element={<Profile/>} />
           <Route path={`/portfolio`} element={<Portfolio/>} />
           <Route path={`/contact`} element={<Contact/>} />
           <Route path={`/*`} element={<Pnf/>} />
        </Routes>
        <Footer/>
    </BrowserRouter>
  )
 }

 export default App