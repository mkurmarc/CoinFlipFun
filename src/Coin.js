import React, { Component } from 'react';
import './Coin.css';


class Coin extends Component {
    render() {
        return (
            <div className="Coin">
                <img src={`https://tinyurl.com/react-coin-${this.props.face}-jpg`}
                alt={`coin face ${this.props.face}`}></img>
            </div> 
        );
    }
}

export default Coin;

// Heads:”https://tinyurl.com/react-coin-heads-jpg” 
// Tails: “https://tinyurl.com/react-coin-tails-jpg”