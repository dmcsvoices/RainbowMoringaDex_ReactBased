import React from 'react';
//import './AccountBalance.css';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    text-align: left;
    padding: 1.5rem 0 1.5rem 5rem;
`;

const Button = styled.button`
    border: 1px solid red;
    padding: 4px;
`;

export default function AccountBalance(props) {


  function handleClick(event) {
    //prevent default action of submittin gthe form
    event.preventDefault();
    //toggle the value of showBalance
    //this.props.showBalance = !this.props.showBalance;
    console.log("handle balance button, showbalance value", props.showBalance);
    //float the prop back to the top
    props.handleBalanceEnable(props.showBalance);
    
  }

  const buttonText = props.showBalance ? 'Hide Balance' : 'Show Balance';
  let content = null;
  const buttonClass = 'btn ' + (props.showBalance ? 'btn-warning' : 'btn-info');
  if(props.showBalance) {
    content = <>Balance: $ {props.amount}</>;
  }
  return (
    //todo wrap this whole section in a react fragment, then
    //add back the styled button, then make a styled div for the balance, so that it is on a
    // separate line from the buttons
    // then do some styling on the divs so that there's spacing between the buttons
  <><div>
    <Section className="container">
      {content}
    </Section>
    </div>
    <div>
    <Button 
        onClick={handleClick}
        className={buttonClass}
        >{buttonText} </Button>
        </div>
  </>
  );
  
}

AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}