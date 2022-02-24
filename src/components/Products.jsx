import React, { useContext }  from 'react'
import Product from './Product'
import AppContext from '../context/AppContex'
import {v4 as uuidv4} from 'uuid'

import '../styles/components/Products.css'

const Products = () => {
  const { state, addToCart } = useContext(AppContext)
  const { products } = state

  const handleAddToCart = product => () => {
    const idItem = uuidv4()
    const newItem = {
      ...product,
      idItem,
    }
    addToCart(newItem)
  }
  return (
    <div className='Products'>
        <div className="Products-items">
            {
                products.map( product => (
                    <Product product={product} key={product.id} handleAddToCart={handleAddToCart}/>
                ))
            }
        </div>
    </div>
  )
}

export default Products