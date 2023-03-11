import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {Navbar,Footer} from './componets/index'
import {Home,About,Trips,Blog,Contact} from './pages'
import './App.css'

function App() {
  return (
    <div className='App example'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='trips' element={<Trips />} />
          <Route path='blog' element={<Blog />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App