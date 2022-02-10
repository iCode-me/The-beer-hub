import './App.css';
import Main from './Containers/Main/Main';
import Beers from './Data/Beers'
import Navbar from './Containers/Navbar/Navbar'
import React from 'react'

const App = () => {

  const highABV = Beers.filter(beer => beer.abv > 7)
  return (
    <div className="container">
      <Navbar />
      <Main beersArr={highABV}/>
    </div>
  )
}

export default App
