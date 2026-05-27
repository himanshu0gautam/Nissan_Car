import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import PricesPages from './ExternalComponent/NavbarComponet/PricesPages'
import MonthlyOffer from './ExternalComponent/NavbarComponet/MonthlyOffer'
import SearchPage from './ExternalComponent/NavbarComponet/SearchPage'

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/prices" element={<PricesPages />} />
          <Route path="/monthly-offer" element={<MonthlyOffer />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default AppRouter