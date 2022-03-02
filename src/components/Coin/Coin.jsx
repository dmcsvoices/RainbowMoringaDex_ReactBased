import React from 'react';
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

export default function Coin(props) {

    
    const handleClick = (event) => {
        //prevent default action of submittin gthe form
        event.preventDefault();

        
        props.handleRefresh(props.tickerId);

    }
    
    
    return (
        <TableR className="coin-row">
            <TableD>{props.name}</TableD>
            <TableD>{props.ticker}</TableD>
            <TableD>${props.price}</TableD>
            <TableD>${props.balance}</TableD>
            <TableD>
                <form action="#" method="POST">
                <Button onClick={handleClick}>Refresh </Button>
                </form>

            </TableD>
      </TableR>
    );
  
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}