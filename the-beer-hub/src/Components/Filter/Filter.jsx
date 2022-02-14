import React from 'react'
import './Filter.scss'

const Filter = (props) => {

  const { handleChangeAbv, handleChangeRange, handleChangePh } = props

  return (
    <div className="filter">
      <ul>
      <div className="filter__filterSection">
        <li>High ABV(Higher 6.0%)</li>
        <input type ="checkbox" onChange={handleChangeAbv}></input>
      </div>
      <div className="filter__filterSection">
        <li>Classic Range</li>
        <input type ="checkbox" onChange={handleChangeRange}></input>
      </div>
      <div className="filter__filterSection">
        <li>Acidic(ph less than 4)</li>
        <input type ="checkbox" onChange={handleChangePh}></input>
      </div>
      </ul>
    </div>
  )
}

export default Filter
