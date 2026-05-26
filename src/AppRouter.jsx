import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import PricesPages from './ExternalComponent/NavbarComponet/PricesPages'

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/prices" element={<PricesPages />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default AppRouter