import React from 'react'
import './Navbar.scss'
import SearchBox from '../../Components/SearchBox/SearchBox'
import Filter from '../../Components/Filter/Filter'

const Navbar = (props) => {

  const { handleInput, handleChangeAbv, handleChangeRange, handleChangePh } = props

  return (
    <div className="navBar">

      <SearchBox handleInput={handleInput} />
      <Filter handleChangeAbv={handleChangeAbv} handleChangeRange={handleChangeRange} handleChangePh={handleChangePh}/>
    
    </div>
  )
}

export default Navbar
