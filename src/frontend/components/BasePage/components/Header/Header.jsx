import React from 'react'
import './Header.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faSearch, faUser, faHeart, faShoppingBag } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <header>
      <div className='headerTopBar'>
        <ul className='headerTopBarBrandsContainer'>
          <li>DressUp</li>
          <li>Clothes4You</li>
          <li>GenericBrand</li>
        </ul>
        <ul className='headerTopBarInfoContainer'>
          <li>Cartão da Loja</li>
          <li>Baixe o App</li>
          <li>Ajuda</li>
        </ul>
      </div>
      <section className='headerMenu'>
        <div className='headerMenuContainer'>
          <a href="/" className='headerMenuLogo'>
            DreamClothes
          </a>
          <div className='headerMenuSearchContainer'>
            <input className='headerMenuSearch' placeholder='O que você procura hoje?' type="text" />
            <FontAwesomeIcon className="headerMenuSearchIcon" icon={faSearch} />
          </div>
          <ul className='headerUserInfo'>
            <li>
              <FontAwesomeIcon className="headerMenuIcons" icon={faHeart} />
              <span>Lista de Desejos</span>
            </li>
            <li>
            <FontAwesomeIcon className="headerMenuIcons" icon={faUser} />
              <span>Entrar</span>
            </li>
            <li>
            <FontAwesomeIcon className="headerMenuIcons" icon={faShoppingBag} />
            </li>
          </ul>
        </div>
      </section>
    </header >
  )
}

export default Header
