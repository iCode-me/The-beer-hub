import React from 'react'
import './Filter.scss'

const Filter = (props) => {

  const { handleChangeAbv, handleChangeRange, handleChangePh } = props

  return (
    <div className="filter">
      <ul>
      <div className="filter__filterSection">
        <li>High ABV(&#62; 6.0%)</li>
        <input type ="checkbox" onChange={handleChangeAbv} className="box"></input>
      </div>
      <div className="filter__filterSection">
        <li>Classic Range</li>
        <input type ="checkbox" onChange={handleChangeRange} className="box"></input>
      </div>
      <div className="filter__filterSection">
        <li>Acidic(ph &lt; 4)</li>
        <input type ="checkbox" onChange={handleChangePh} className="box"></input>
      </div>
      </ul>
    </div>
  )
}

export default Filter
