
import styled from 'styled-components';
import Coin from '../Coin/Coin';

import React from 'react'

export default function CoinList(props){
    let content = null;
    console.log("in Coinlist, showbalance:",props.showBalance);
    content = (props.showBalance) ? 
         
    props.coinData.map( ({key,name, ticker, price, balance}) => 
      <Coin key={key} 
            handleRefresh={props.handleRefresh} 
            name={name} 
            ticker={ticker}
            balance={balance} 
            price={price}
            tickerId={key} />
    )
    :  
    props.coinData.map( ({key, name, ticker, price, balance}) => 
    <Coin key={key} 
          handleRefresh={props.handleRefresh} 
          name={name} 
          ticker={ticker}
          balance={"hidden"} 
          price={price}
          tickerId={key} />
  );
  return (
      <table className="coin-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Ticker</th>
          <th>Price</th>
          <th>Balance</th>
        </tr>
      </thead>
      <tbody>
        {content}
      </tbody>
    </table>
  )
  
}
