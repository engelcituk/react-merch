import React from 'react'
import '../styles/components/Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='Header'>
      <h1 className='Header-title'>
      <Link to="/">
        eCituk merch
      </Link>
      </h1>
      <div className='Header-checkout'>
        <Link to="/checkout">
        <i className="fas fa-shopping-basket fa-2x" title="Checkout" />
        </Link>
      </div>
    </header>
  )
}

export default Header