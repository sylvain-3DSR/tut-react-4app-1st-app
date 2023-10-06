import React from 'react'
import { RiMenu3Line, RiCloseLin} from 'react-icons/ri'
import logo from "../../assets/logo.svg"
import './navbar.css'

// BEM -> Block Element Modifier
// css naming convention
const Navbar = () => {
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links-logo">
          <image src={logo} alt="logo" />
        </div>
      </div>
    </div>
  )
}

export default Navbar