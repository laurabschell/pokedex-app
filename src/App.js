import { Typography } from '@mui/material';
import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import PokemonTable from './components/PokemonTable/PokemonTable'

function App() {
  return (
    <div className="App">
      <Navbar />
      <PokemonTable />
    </div>
  );
}

export default App;
