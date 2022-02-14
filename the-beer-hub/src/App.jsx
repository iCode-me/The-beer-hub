import { useState } from "react";
import './App.css';
import Main from './Containers/Main/Main';
import Navbar from './Containers/Navbar/Navbar'
import React from 'react'
import Beers from "./Data/Beers";

const App = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [abvChecked, setAbvChecked] = useState(false);
  const [rangeChecked, setRangeChecked] = useState(false);
  const [phChecked, setPhChecked] = useState(false);

  const handleChangeAbv = (event) => {
    setAbvChecked(event.target.checked);
  }

  const handleChangeRange = (event) => {
    setRangeChecked(event.target.checked);
  }

  const handleChangePh = (event) => {
    setPhChecked(event.target.checked);
  }

  const handleInput = (event) => {
    const newInput = event.target.value.toLowerCase();
    setSearchTerm(newInput);
  }

  const filteredBeers = Beers.filter((beer) => {
    if (abvChecked) {
     return beer.name.toLowerCase().includes(searchTerm) && beer.abv > 6
    } else if (rangeChecked) {
    return beer.name.toLowerCase().includes(searchTerm) && beer.first_brewed.split("/")[1] < 2010 
    } else if (phChecked) {
      return beer.name.toLowerCase().includes(searchTerm) &&  beer.ph < 4
    } else {
      return beer.name.toLowerCase().includes(searchTerm);
    }
  })

  return (
    <div className="container">
      <Navbar 
      searchTerm={searchTerm} 
      handleInput={handleInput} 
      handleChangeAbv={handleChangeAbv}
      handleChangeRange={handleChangeRange}
      handleChangePh={handleChangePh}
      />
      <Main beersArr={filteredBeers} /> 
    </div>
  )
}

export default App
