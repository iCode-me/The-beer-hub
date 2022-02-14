import React from 'react'
import './Card.scss'

const Card = (props) => {

  const { image, name, description } = props;

  return (
    <div className="beerCard">
      <img src={image} alt="" className="beerCard__image"/>
      <div className="beerCard__info">
      <h2>{name}</h2>
      <p>{description.slice(0,450)}</p>
      </div>
    </div>
  )
}

export default Card