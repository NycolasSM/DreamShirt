import React from 'react'
import './BasePage.css'
import Body from './components/Body/Body'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'

const BasePage = () => {
  return (
    <>
      <Header />
      <Nav />
      <Body />
    </>
  )
}

export default BasePage
