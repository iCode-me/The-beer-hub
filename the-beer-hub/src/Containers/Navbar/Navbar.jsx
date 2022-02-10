import React from 'react'
import './Navbar.scss'

const Navbar = () => {
  return (
    <div className="navBar">
      <input type="text" placeholder="Search..." className="navBar__search"></input>

      <ul>
        <div className="navBar__filterSection">
          <li>High ABV(Higher 6.0%)</li>
          <input type ="checkbox"></input>
        </div>
        <div className="navBar__filterSection">
          <li>Classic Range</li>
          <input type ="checkbox"></input>
        </div>
        <div className="navBar__filterSection">
          <li>Acidic(ph less than 4)</li>
          <input type ="checkbox"></input>
        </div>
      </ul>
    </div>
  )
}

export default Navbar
