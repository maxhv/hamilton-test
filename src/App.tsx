import React from 'react';
import './App.scss';
import {Header} from './containers/Header';
import {MarvelHeroes} from './containers/MarvelHeroes';

function App() {
  return (
    <div className="App">
      <Header />
      <MarvelHeroes />
    </div>
  );
}

export default App;
