import React from 'react'

const Filter = (props) => {

  const { highABV, acidicPh } = props

  return (
    <div className="filter">
      <ul>
      <div className="filter__filterSection">
        <li>High ABV(Higher 6.0%)</li>
        <input type ="checkbox" highABV={highABV}></input>
      </div>
      <div className="filter__filterSection">
        <li>Classic Range</li>
        <input type ="checkbox"></input>
      </div>
      <div className="filter__filterSection">
        <li>Acidic(ph less than 4)</li>
        <input type ="checkbox" acidicPh={acidicPh}></input>
      </div>
      </ul>
    </div>
  )
}

export default Filter
