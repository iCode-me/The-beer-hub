import React from 'react'
import Card from './Card'
import './CardList.scss'
import Beers from '../Data/Beers'

const CardList = () => {

  // const { beersArr } = props;

  const beersList = Beers.map(beer => <Card image={beer.image_url} name={beer.name} description={beer.description}/>)
  console.log(beersList)

  return (
    <div className="listOfBeers">
      {beersList}
    </div>
  )
}

export default CardList