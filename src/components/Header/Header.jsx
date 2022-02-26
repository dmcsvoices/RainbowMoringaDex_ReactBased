import React, { Component } from 'react';
import styled from 'styled-components';

const Div = styled.div`
    background-image: linear-gradient(to bottom right, rgb(11, 174, 45), rgb(229, 236, 233));
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    color: white;
`;

const Button = styled.button`
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 25px;
`;




export default class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            //price: this.props.price
        }
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin(event) {
        //prevent default action of submittin gthe form
        event.preventDefault();
        
        //call moralis login
        console.log("In HandleLogin");


  
    }

    render() {
        return (
        <Div>  
            <h1 className="App-title">Rainbow Moringa Dex</h1>
            <form><Button onClick={this.handleLogin}>Login</Button></form>
        </Div>
        )
    }
}
