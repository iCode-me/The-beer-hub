import { useState } from "react";
import './App.css';
import Main from './Containers/Main/Main';
import Navbar from './Containers/Navbar/Navbar'
import React from 'react'
import Beers from "./Data/Beers";


const App = () => {

  const [searchTerm, setSearchTerm] = useState("");

  const [beersArr, setBeersArr] = useState(Beers);

  const handleInput = (event) => {
    const newInput = event.target.value.toLowerCase();
    setSearchTerm(newInput);

    const filteredBeers = beersArr.filter((beer) => {
      return beer.name.toLowerCase().includes(searchTerm);
    })
    
    setBeersArr(filteredBeers);
  }

  const highABV = Beers.filter(beer => beer.abv > 7)
  // const classicRange = Beers.filter()
  const acidicPh = Beers.filter(beer => beer.ph < 4)

  return (
    <div className="container">
      <Navbar searchTerm={searchTerm} handleInput={handleInput} highABV={highABV} acidicPh={acidicPh} />
      <Main beersArr={beersArr} />
    </div>
  )
}

export default App
