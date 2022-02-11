import React from 'react'
import './Navbar.scss'
import SearchBox from '../../Components/SearchBox'
import Filter from '../../Components/Filter'

const Navbar = (props) => {

  const {highABV, acidicPh, handleInput} = props

  return (
    <div className="navBar">

      <SearchBox handleInput={handleInput} />
      <Filter highABV={highABV} acidicPh={acidicPh}/>
    
    </div>
  )
}

export default Navbar
