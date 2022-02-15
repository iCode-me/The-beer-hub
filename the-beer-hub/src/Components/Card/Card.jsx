import React from 'react'
import './Card.scss'

const Card = (props) => {

  const { image, name, description } = props;

  return (
    <div className="beerCard">
      <img src={image} alt="" className="beerCard__image" />
      <div className="beerCard__name">
        <h2>{name}</h2>
        <div className="beerCard__description">
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default Card