import React, { useState, useEffect } from 'react';
import './App.css';

import img from './assets/conversor-coin.jpg';

import Conversor from './Conversor/index';

function App() {

  return (
    <div className="App">
      <header>
        <img src={img} alt=""/>
        <h1>Conversor de Moedas</h1>
      </header>

      <div className="conversor-container">
        <Conversor moeda="USD" />
        <Conversor moeda="EUR" />
        <Conversor moeda="GBP" />
        <Conversor moeda="CAD" />
        <Conversor moeda="AUD" />
        <Conversor moeda="ARS" />
        <Conversor moeda="USDT" />
        <Conversor moeda="JPY" />
        <Conversor moeda="CHF" />
        <Conversor moeda="CNY" />
        <Conversor moeda="BTC" />
        <Conversor moeda="ETH" />
      </div>
    </div>
  );
}

export default App;
