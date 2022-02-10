import React from 'react'
import './Navbar.scss'

const Navbar = () => {
  return (
    <div className="navBar">
      <input type="text" placeholder="Search..."></input>

      <ul>
        <li>High ABV(Higher than 6.0%)</li><input type ="checkbox"></input>
        <li>Classic Range</li><input type ="checkbox"></input>
        <li>Acidic(ph less than 4)</li><input type ="checkbox"></input>
      </ul>
    </div>
  )
}

export default Navbar
