import React from 'react'
import { NavLink } from 'react-router-dom'
import './navLeft.scss'

const NavLeft = () => {
  return (
    <ul className="navLeftList">
      <li className="navLeftItem">
        <NavLink to="/">
          <i class="fa-solid fa-house"></i>
          <p>Homce</p>
        </NavLink>
      </li>
      <li className="navLeftItem">
        <NavLink to="/shorts">
          <i class="fa-regular fa-circle-play"></i>
          <p>Shorts</p>
        </NavLink>
      </li>
      <li className="navLeftItem">
        <NavLink to="/subscription">
          <i class="fa-solid fa-play"></i>
          <p>Subscription</p>
        </NavLink>
      </li>
      <li className="navLeftItem">
        <NavLink to="/library">
          <i class="fa-solid fa-play"></i>
          <p>Library</p>
        </NavLink>
      </li>
      <li className="navLeftItem">
        <NavLink to="/downloads">
          <i class="fa-solid fa-arrow-down-long"></i>
          <p>Downloads</p>
        </NavLink>
      </li>
    </ul>
  );
}

export default NavLeft