import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TableR = styled.tr`
font-size: 1em;
`;


const TableD = styled.td`
border: 1px solid palevioletred;    
font-size: 1em;
width: 25vh
`;


const Button = styled.button`
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 25px;
`;

export default class Coin extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(event) {
        //prevent default action of submittin gthe form
        event.preventDefault();

        
        this.props.handleRefresh(this.props.ticker);
/*
        const randomPercentage = 0.995 + Math.random() * 0.01;
        this.setState( function(oldState){
            return {
                price: oldState.price * randomPercentage
            };
        });
*/
    }
    
    render() {
    return (
        <TableR className="coin-row">
            <TableD>{this.props.name}</TableD>
            <TableD>{this.props.ticker}</TableD>
            <TableD>${this.props.price}</TableD>
            <TableD>
                <form action="#" method="POST">
                <Button onClick={this.handleClick}>Refresh </Button>
                </form>

            </TableD>
      </TableR>
    );
  }
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}