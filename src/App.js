import React, { Component } from 'react';
import './App.css';
import CoinList from './components/CoinList/CoinList';
import Header from './components/Header/Header';
import AccountBalance from './components/AccountBalance/AccountBalance'
import axios from 'axios';

const COIN_COUNT = 10;
const formatPrice = price =>  parseFloat(Number(price).toFixed(4));

class App extends React.Component {
  
  state = {
    balance: 10000,
    showBalanceEnabled: false,
    coinData: [
     /* {
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
      }*/
    ]
  }
   

  componentDidMount = async () => {
    const response = await axios.get('https://api.coinpaprika.com/v1/coins');
      
    const coinIds = response.data.slice(0, COIN_COUNT).map(coin => coin.id);
   //console.log("componentsDidMount, coinIds : ", coinIds);
    //retrieve the prices here
    const tickerUrl ='https://api.coinpaprika.com/v1/tickers/';
    const promises = coinIds.map(id => axios.get(tickerUrl + id));
    const coinData = await Promise.all(promises);
    const coinPriceData = coinData.map(function(response) {
      const coin = response.data;
      return {
        key: coin.id,
        name: coin.name,
        ticker: coin.symbol,
        balance: 0,
        price: formatPrice(coin.quotes.USD.price),
      };
    })
  

    this.setState({ coinData: coinPriceData });
 
  
  }
  
  
  handleRefresh = async (valueChangeId) => {
    const tickerUrl =`https://api.coinpaprika.com/v1/tickers/${valueChangeId}`;
    const response = await axios.get(tickerUrl);
    
    const newPrice = formatPrice(response.data.quotes.USD.price);
    const newCoinData = this.state.coinData.map( function(values) {
      let newValues = { ...values };
      if (valueChangeId === newValues.key ) {
        newValues.price = newPrice;
      }
      return newValues;
    
    });
    this.setState({ coinData: newCoinData})
  }

  handleBalanceEnable = (valueEnabled) => {
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
