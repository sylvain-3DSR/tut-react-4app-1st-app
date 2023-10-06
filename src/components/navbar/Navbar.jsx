import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import logo from '../../assets/logo.svg'
import './navbar.css'

const Menu = () => (
  <>
  <p><a href='#home'></a>Home</p>
  <p><a href='#wgpt3'></a>What is GPT3?</p>
  <p><a href='#possibility'></a>Open AI</p>
  <p><a href='#features'></a>Case Studies</p>
  <p><a href='#blog'></a>Library</p>
  </>
)

// BEM -> Block Element Modifier
// css naming convention
const Navbar = () => {
  const [toggleMenu, settoggleMenu] = useState(false)

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className='gpt3__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='gpt3__navbar-sign'>
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className='gpt3__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color='#FFF' size={27} onClick={() => settoggleMenu(false)}/>
          : <RiMenu3Line color='#FFF' size={27} onClick={() => settoggleMenu(true)}/>
        }
        {toggleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className='gpt3__navbar-menu_container-links'>
              <Menu />
              <div className='gpt3__navbar-menu_container-links-sign'>
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar