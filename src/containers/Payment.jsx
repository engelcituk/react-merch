import React, { useContext } from 'react'
import { PayPalButton } from 'react-paypal-button-v2'
import AppContext from '../context/AppContex'
import handleSumTotal from '../utils/handleSumTotal'
import { useNavigate } from 'react-router-dom'

import '../styles/components/Payment.css'

const Payments = () => {
  const { state, addNewOrder } = useContext(AppContext)
  const  { cart, buyer, } = state
  const navigate = useNavigate()

  const paypalOptions = {
    clientId: 'Adm1c4ZtNHz7OnudUnoLF9LSkcwRRWwSXY81DTL23acOJPXsg1uL_zOKVJ4Kky_UHKaylW0LqQ7b66jz',
    intent: 'capture',
    currency: 'USD'
  }

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  }

  const handlePaymentSuccess = ( data ) => {
    console.log( data )
    if( data === 'COMPLETED' ){
      const newOrder = {
        buyer,
        product: cart,
        payment: data
      }
      addNewOrder( newOrder )
      navigate('/checkout/success')
    }
  }

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {
          cart.map( (item) => (
            <div className="Payment-item" key={item.idItem}>
              <div className="Payment-element">
                <h4>{item.title}</h4>
                <span>
                  $
                  {''}
                  {item.price}
                  </span>
              </div>
            </div>
          ))
        }
        <div className="Payment-button">
            {/*  */}
    
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal(cart)}
            onPaymentStart={()=> console.log('startPayment')}
            onPaymentSuccess={ data => handlePaymentSuccess( data) }
            onPaymentError={ error => console.log( error ) }
            onPaymentCancel={ data => console.log( data ) }
          />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Payments