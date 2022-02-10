
import React from 'react'
import CardList from '../../Components/CardList'
// import Card from '../../Components/Card'
import './Main.scss'

const main = () => {

  // const { beersArr } = props;

  // const beersJSX = beersArr.map(beer => <Card image={beer.image_url} name={beer.name} description={beer.description}/>)

  return (
    <div>
      <CardList />
      {/* {beersJSX} */}
    </div>
  )
}

export default main