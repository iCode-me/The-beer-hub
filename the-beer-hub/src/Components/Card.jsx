import React from 'react'
import './Card.scss'

const Card = (props) => {

  const { image, name, description } = props;

  return (
    <div className="beerCard">
      <img src={image} alt="" className="beerImage"/>
      <div className="beerInfo">
      <h2>{name}</h2>
      <p>{description}</p>
      </div>
    </div>
  )
}

export default Card