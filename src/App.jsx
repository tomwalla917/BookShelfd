import { HashRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home.jsx'
import Search from './pages/Search.jsx'
import Friends from './pages/Friends.jsx'
import Profile from './pages/Profile.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="app">
        <header className="header bg tertiary">
          <div className="head">
            <div className="name">
              <p className="h2">BookShelfd</p>
            </div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"  
                  aria-controls="navbarNav"    
                  aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/search">Search</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/portfolio">Friends</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/contact">Profile</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/portfolio" element={<Friends />} />
          <Route path="/contact" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
