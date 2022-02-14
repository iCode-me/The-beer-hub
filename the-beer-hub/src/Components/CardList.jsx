import React from 'react'
import Card from './Card'
import './CardList.scss'


const CardList = (props) => {

  const {beersArr} = props

  const beersList = beersArr.map(beer => <Card image={beer.image_url} name={beer.name} description={beer.description}/>)

  return (
    <div className="listOfBeers">
      {beersList}
    </div>
  )
}

export default CardList