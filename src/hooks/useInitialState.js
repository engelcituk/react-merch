import { useState } from 'react'
import initialState from '../initialState'

const useInitiaState = () => {
    const [ state, setState ] = useState( initialState )

    const addToCart = payload => {
        setState({
            ...state,
            cart: [...state.cart, payload ]
        })
    }

    const removeFromCart = payload => {
        setState({
            ...state,
            cart: state.cart.filter(items => items.idItem !== payload.idItem )
        })
    }

    const addToBuyer = payload => {
        setState({
            ...state,
            buyer:[...state.buyer, payload]
        })
    }

    const addNewOrder = payload => {
        setState({
            ...state,
            orders:[...state.orders, payload]
        })
    }

    return {
        addToCart, //retorno los metodos
        removeFromCart,
        addToBuyer,
        addNewOrder,
        state //y el estado
    }
}

export default useInitiaState