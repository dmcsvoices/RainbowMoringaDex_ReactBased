import React, { useEffect, useState } from 'react';
import './App.css';
import CoinList from './components/CoinList/CoinList';
import Header from './components/Header/Header';
import AccountBalance from './components/AccountBalance/AccountBalance'
import axios from 'axios';
//import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/minty/bootstrap.min.css';
import '@fortawesome/fontawesome-free/js/all';

const COIN_COUNT = 10;
const formatPrice = price =>  parseFloat(Number(price).toFixed(4));

function App(props) {
  

   
  const [balance, setbalance] = useState(10000);
  const [showBalanceEnabled, setshowBalanceEnabled] = useState(true);
  const [coinData, setCoinData] = useState([]);

  const componentDidMount = async () => {
    const response = await axios.get('https://api.coinpaprika.com/v1/coins');   
    const coinIds = response.data.slice(0, COIN_COUNT).map(coin => coin.id);
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
    setCoinData(coinPriceData);
  }
  

  useEffect(function(){
    //only load data if we need it
    if (coinData.length === 0) {
      //component did mount
      componentDidMount();
    } 


  });


  
  const handleRefresh = async (valueChangeId) => {
    const tickerUrl =`https://api.coinpaprika.com/v1/tickers/${valueChangeId}`;
    const response = await axios.get(tickerUrl);
    
    const newPrice = formatPrice(response.data.quotes.USD.price);
    const newCoinData = coinData.map( function(values) {
      let newValues = { ...values };
      if (valueChangeId === newValues.key ) {
        newValues.price = newPrice;
      }
      return newValues;
    
    });

    setCoinData(newCoinData);
  }

  const handleBalanceEnable = (valueEnabled) => {
    setshowBalanceEnabled(valueEnabled =>!valueEnabled);
  }


    return (
      <div className="App">
        <Header showBalance={showBalanceEnabled} />
        <AccountBalance amount={balance} showBalance={showBalanceEnabled} handleBalanceEnable={handleBalanceEnable} />
        <CoinList coinData={coinData} showBalance={showBalanceEnabled} handleRefresh={handleRefresh} />
      
      <div>
          <iframe width="396" height="441" src="https://cybermap.kaspersky.com/en/widget/dynamic/dark" frameborder="0"></iframe>
      </div>
  
      </div>
    );
  

 
}

export default App;
