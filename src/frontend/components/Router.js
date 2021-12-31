import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';

import BasePage from './BasePage/BasePage.jsx'
import DreamShirt from './DreamShirt/DreamShirt.jsx'

const Router = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BasePage />} />
        <Route path="/DreamShirt" element={<DreamShirt />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router