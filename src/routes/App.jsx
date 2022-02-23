import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import * as Page from '../containers/index'

export const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Page.Home />} />
            <Route path='/checkout' element={<Page.Checkout />} />
            <Route path='/checkout/information' element={<Page.Information />} />
            <Route path='/checkout/payment' element={<Page.Payment />} />
            <Route path='/checkout/success' element={<Page.Success />} />
            <Route path='*' element={<Page.NotFound />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App