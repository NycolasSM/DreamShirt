import React from 'react'
import './Header.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faSearch, faUser, faHeart, faShoppingBag, faAngleDown } from '@fortawesome/free-solid-svg-icons'

import Nav from '../Nav/Nav'

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
          <Nav />
          <ul className='headerUserInfo'>
            <li>
              <FontAwesomeIcon className="headerMenuIcons" icon={faSearch} />
            </li>
            <li>
              <FontAwesomeIcon className="headerMenuIcons" icon={faHeart} />
            </li>
            <li>
              <FontAwesomeIcon className="headerMenuIcons" icon={faUser} />
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
