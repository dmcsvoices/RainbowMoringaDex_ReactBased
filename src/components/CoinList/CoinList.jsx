
import styled from 'styled-components';
import Coin from '../Coin/Coin';

import React, { Component } from 'react'

export default class CoinList extends Component {
  
  render() {

    let content = null;
    console.log("in Coinlist, showbalance:",this.props.showBalance)
    content = (this.props.showBalance) ? 
         
          this.props.coinData.map( ({name, ticker, price, balance}) => 
            <Coin key={ticker} 
                  handleRefresh={this.props.handleRefresh} 
                  name={name} 
                  ticker={ticker}
                  balance={balance} 
                  price={price} />
          )
         :
        
          this.props.coinData.map( ({name, ticker, price, balance}) => 
          <Coin key={ticker} 
                handleRefresh={this.props.handleRefresh} 
                name={name} 
                ticker={ticker}
                balance={"hidden"} 
                price={price} />
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
}
