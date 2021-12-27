import React from 'react'
import './Nav.css'

const Nav = () => {
  return (
    <nav className="navigation">
      <ul className='navigationTabs'>
        <li>Camisetas</li>
        <li>Calças</li>
        <li>Calçados</li>
        <li>Acessórios</li>
        <a href="/DreamShirt">DreamShirt</a>
        <li>Contato</li>
      </ul>
    </nav>
  )
}

export default Nav
