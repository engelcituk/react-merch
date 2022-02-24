import React, { useContext }  from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../context/AppContex'

import '../styles/components/Header.css'

const Header = () => {
  const { state } = useContext(AppContext)
  const { cart } = state

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
        {cart.length > 0 && <div className='Header-alert'>{cart.length}</div>}
      </div>
    </header>
  )
}

export default Header