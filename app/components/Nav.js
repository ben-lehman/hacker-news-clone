import React from 'react'
import { NavLink } from 'react-router-dom'

const activeStyle = {
  color: '#600'
}

export default function Nav () {
  return (
    <nav className='row'>
      <ul className='row nav'>
        <li>
          <NavLink
            to='/'
            className='nav-link'
            exact
            activeStyle={activeStyle}>
              Top
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/new'
            className='nav-link'
            activeStyle={activeStyle}>
              New
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}