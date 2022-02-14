import { useState, useEffect } from "react";
import './App.css';
import Main from './Containers/Main/Main';
import Navbar from './Containers/Navbar/Navbar'
import React from 'react'

const App = () => {

  const [beers, setBeers] = useState([]);
  
  const getBeers = () => {
    fetch("https://api.punkapi.com/v2/beers?per_page=80")
    .then(res => {
      return res.json()
    }).then(data => {
      setBeers(data)
    })
  }

 useEffect (() => {
   return getBeers()
 },[])

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

  const filteredBeers = beers.filter((beer) => {
   
    if (abvChecked && rangeChecked && phChecked) { 
      return beer.name.toLowerCase().includes(searchTerm) && beer.abv > 6 && beer.first_brewed.slice(-4) <= 2010 && beer.ph < 4
    } else if (abvChecked && rangeChecked) {
      return beer.name.toLowerCase().includes(searchTerm) && beer.abv > 6 && beer.first_brewed.slice(-4) <= 2010 
    } else if (abvChecked && phChecked) {
      return beer.name.toLowerCase().includes(searchTerm) && beer.abv > 6 && beer.ph < 4 
    } else if (rangeChecked && phChecked) {
      return beer.name.toLowerCase().includes(searchTerm) && beer.first_brewed.slice(-4) <= 2010 && beer.ph < 4 
    } else if (phChecked) {
      return beer.name.toLowerCase().includes(searchTerm) &&  beer.ph < 4 
    } else if (rangeChecked) {
      return beer.name.toLowerCase().includes(searchTerm) && beer.first_brewed.slice(-4) <= 2010 
    } else if (abvChecked) {
      return beer.name.toLowerCase().includes(searchTerm) && beer.abv > 6
    } else return beer.name.toLowerCase().includes(searchTerm);
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
