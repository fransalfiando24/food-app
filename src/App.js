import React from 'react'
import Food from './components/Food';
import HeadlineCards from './components/HeadlineCards';
import Hero from './components/Hero';
import Navbar from './components/Navbar'
import Category from './components/Category'
import { useState } from 'react';

function App() {
  const [searched, setSearched] = useState("");

  const searchHandle = (searchValue) => {
    setSearched(searchValue);
  }

  return (
    <div>
      <Navbar searchHandle={searchHandle}/>
      <Hero/>
      <HeadlineCards/>
      <Food searched={searched}/>
      <Category/>
    </div>
  );
}

export default App;
