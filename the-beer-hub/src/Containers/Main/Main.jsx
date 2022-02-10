
import React from 'react'
// import CardList from '../../Components/CardList'

import Card from '../../Components/Card'

const main = (props) => {

  const { beersArr } = props;

  const beersJSX = beersArr.map(beer => <Card image={beer.image_url} name={beer.name} />)

  return (
    <div>
      {beersJSX}
    </div>
  )
}

export default main