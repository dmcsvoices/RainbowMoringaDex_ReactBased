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
      showBalanceEnabled: false,
      coinData: [
        {
          name: 'Bitcoin',
          ticker: 'BTC',
          balance: 0.005,
          price: 34000.00
        },
        {
          name: 'Ethereum',
          ticker: 'ETH',
          balance: 0.5,
          price: 3200.00
        },
        {
          name: 'Cardano',
          ticker: 'ADA',
          balance: 3500,
          price: 0.90
        },
        {
          name: 'Solana',
          ticker: 'SOL',
          balance: 2455,
          price: 27.00
        }
      ]
    }
    this.handleRefresh = this.handleRefresh.bind(this);
    this.handleBalanceEnable = this.handleBalanceEnable.bind(this);
  }
  handleRefresh(valueChangeTicker){
    const newCoinData = this.state.coinData.map( function({ticker, name, price}) {
      let newPrice = price;
      if (valueChangeTicker === ticker ) {
        const randomPercentage = 0.995 + Math.random() * 0.01;
        newPrice =  newPrice * randomPercentage;
      }
      return {ticker, name, price: newPrice}
    });
    this.setState({ coinData: newCoinData})
  }

  handleBalanceEnable(valueEnabled){
    this.setState({ showBalanceEnabled: !valueEnabled})
  }

  render() {
    return (
      <div className="App">
        <Header showBalance={this.state.showBalanceEnabled} />
        <AccountBalance amount={this.state.balance} showBalance={this.state.showBalanceEnabled} handleBalanceEnable={this.handleBalanceEnable} />
        <CoinList coinData={this.state.coinData} showBalance={this.state.showBalanceEnabled} handleRefresh={this.handleRefresh} />
      
      <div>
          <iframe width="396" height="441" src="https://cybermap.kaspersky.com/en/widget/dynamic/dark" frameborder="0"></iframe>
      </div>
  
      </div>
    );
  }

 
}

export default App;
