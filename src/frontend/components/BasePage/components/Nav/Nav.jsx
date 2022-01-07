import React from 'react'
import './Nav.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faAngleDown, faPencilAlt } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
  return (
    <nav className="navigation">
      <ul className='navigationTabs'>
        <li>
          <div>Camisetas</div>
          <FontAwesomeIcon className="navHeaderIcon" icon={faAngleDown} />
        </li>
        <li>
          <div>Calças</div>
          <FontAwesomeIcon className="navHeaderIcon" icon={faAngleDown} />
        </li>
        <li>
          <div>Calçados</div>
          <FontAwesomeIcon className="navHeaderIcon" icon={faAngleDown} />
        </li>
        <li>
          <div>Acessórios</div>
          <FontAwesomeIcon className="navHeaderIcon" icon={faAngleDown} />
        </li>
        <li className='dreamShirtTab'>
          <a href="/DreamShirt">DreamShirt</a>
          <FontAwesomeIcon className="dreamShirtNavIcon" icon={faPencilAlt} />
        </li>
        <li>
          <div>Contato</div>
          <FontAwesomeIcon className="navHeaderIcon" icon={faAngleDown} />
        </li>
      </ul>
    </nav>
  )
}

export default Nav
