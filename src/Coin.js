import React, { Component } from 'react';
import './Coin.css';

class Coin extends Component {
    render() {
        return (
            <img src={`https://tinyurl.com/react-coin-${this.props.face}-jpg`}
                alt={`coin face ${this.props.face}`}></img>
        );
    }
}

export default Coin;

// Heads:”https://tinyurl.com/react-coin-heads-jpg” 
// Tails: “https://tinyurl.com/react-coin-tails-jpg”