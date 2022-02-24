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

    return {
        addToCart, //retorno los metodos
        removeFromCart,
        state //y el estado
    }
}

export default useInitiaState