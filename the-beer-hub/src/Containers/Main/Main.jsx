
import React from 'react'
import CardList from '../../Components/CardList'
import './Main.scss'

const main = (props) => {

  const { beersArr } = props;

  return (
    <div>
      <CardList beersArr={beersArr}/>
    </div>
  )
}

export default main
