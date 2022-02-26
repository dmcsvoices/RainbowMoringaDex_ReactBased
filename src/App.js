import React, { Component } from 'react';
import './App.css';
import CoinList from './components/CoinList/CoinList';
import Header from './components/Header/Header';
import AccountBalance from './components/AccountBalance/AccountBalance'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: 10000,
      coinData: [
        {
          name: 'Bitcoin',
          ticker: 'BTC',
          price: 34000.00
        },
        {
          name: 'Ethereum',
          ticker: 'ETH',
          price: 3200.00
        },
        {
          name: 'Cardano',
          ticker: 'ADA',
          price: 0.90
        },
        {
          name: 'Solana',
          ticker: 'SOL',
          price: 27.00
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <Header />
        <AccountBalance amount={this.state.balance} />
        <CoinList coinData={this.state.coinData} />
      
      <div>
          <iframe width="396" height="441" src="https://cybermap.kaspersky.com/en/widget/dynamic/dark" frameborder="0"></iframe>
      </div>
  
      </div>
    );
  }

 
}

export default App;
