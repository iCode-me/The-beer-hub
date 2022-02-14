import React from 'react'
import './SearchBox.scss'

const SearchBox = (props) => {

  const { handleInput } = props

  return (
    <div>
      <input type="text" placeholder="Search..." className="search" onInput={handleInput} ></input>
    </div>
  )
}

export default SearchBox