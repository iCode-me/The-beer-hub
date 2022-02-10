import './App.css';
import Main from './Containers/Main/Main';
import Beers from './Data/Beers'
import React from 'react'

const App = () => {

  const highABV = Beers.filter(beer => beer.abv > 6)
  return (
    <div>
      <Main beersArr={highABV}/>
    </div>
  )
}

export default App
