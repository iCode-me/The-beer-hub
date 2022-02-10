import './App.css';
import Main from './Containers/Main/Main';
import Navbar from './Containers/Navbar/Navbar'
import React from 'react'

const App = () => {


  // const highABV = Beers.filter(beer => beer.abv > 7)
  return (
    <div className="container">
      <Navbar />
      <Main  />
    </div>
  )
}

export default App
