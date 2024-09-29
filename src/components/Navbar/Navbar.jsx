import React from 'react'
import './Navbar.css'
import logo from '../../assets/images/logo.svg'
import NavMenu from '../NavMenu/NavMenu'

const Navbar = () => {
  return (
   
    <header className="header-container">
        <div className="header-section">
        <div className="container">
            <div className="header-left">
            
            <div className="logo">
                <a href="/">
                <img src={logo} alt="logo" />
                </a>
            </div>         
            </div>

            {/* Header Right */}
            <div className="header-right">
            <ul>
                <li>
                 Hi, Swati
                </li>
                <span className="vertical-line"></span>
                <li>
                 0 Credits Available
                </li>
                <span className="vertical-line"></span>
                <li>
                    Help
                </li>
            </ul>
            </div>
        </div>
        <NavMenu />
        </div>

    </header>
      

  )
}

export default Navbar
