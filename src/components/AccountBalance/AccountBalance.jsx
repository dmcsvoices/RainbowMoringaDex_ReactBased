import React, { Component } from 'react';
//import './AccountBalance.css';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
    border: 1px solid red;
    font-size: 2rem;
    text-align: left;
    padding: 1.5rem 0 1.5rem 5rem;
`;

export default class AccountBalance extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
}



  handleClick(event) {
    //prevent default action of submittin gthe form
    event.preventDefault();
    //toggle the value of showBalance
    //this.props.showBalance = !this.props.showBalance;
    console.log("handle balance button, showbalance value", this.props.showBalance);
    //float the prop back to the top
    this.props.handleBalanceEnable(this.props.showBalance);
    
  }
  render() {
    const buttonText = this.props.showBalance ? 'Hide Balance' : 'Show Balance';
    let content = null;
    if(this.props.showBalance) {
      content = <>Balance: $ {this.props.amount}</>;
    }
    return (
    <Section className="balance-section">
      {content}
      <button onClick={this.handleClick}>{buttonText} </button>
    </Section>
    );
  }
}

AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}