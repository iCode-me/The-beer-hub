
import React from 'react'
import CardList from '../../Components/CardList/CardList'
import './Main.scss'

const main = (props) => {

  const { beersArr } = props;

  return (
    <div className="main">
      <div className="main__heading">
      <h1>THE BEER HUB</h1>
      </div>
      <CardList beersArr={beersArr}/>
    </div>
  )
}

export default main
