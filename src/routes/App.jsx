import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import * as Page from '../containers/index'
import Layout from '../components/Layout'
import AppContext from '../context/AppContex'
import useInitialState from '../hooks/useInitialState'


export const App = () => {
  const initialState = useInitialState()
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
          <Layout>
              <Routes>
                  <Route path='/' element={<Page.Home />} />
                  <Route path='/checkout' element={<Page.Checkout />} />
                  <Route path='/checkout/information' element={<Page.Information />} />
                  <Route path='/checkout/payment' element={<Page.Payment />} />
                  <Route path='/checkout/success' element={<Page.Success />} />
                  <Route path='*' element={<Page.NotFound />} />
              </Routes>
          </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App