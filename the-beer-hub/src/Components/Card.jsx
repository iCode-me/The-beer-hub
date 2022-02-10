import React from 'react'
import './Card.scss'

const Card = (props) => {

  const { image, name } = props;

  return (
    <div>
      <img src={image} alt=""/>
      {/* <h2>{title}</h2> */}
      <p>{name}</p>
    </div>
  )
}

export default Card