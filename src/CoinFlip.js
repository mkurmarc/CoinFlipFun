import React, { Component } from 'react';
import Coin from './Coin';
import './Coin.css';

class CoinFlip extends Component {
    static defaultProps = {
        title: "Let's Flip This Coin",
        facesArr: ["heads", "tails"]
    };

    constructor(props) {
        super(props);
        this.state = {
            coin1: 'heads',
            c1TailsCount: 0,
            c1HeadsCount: 0,
            c1TotalFlips: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }

    flip() {
        // stores randomized item from facesArr prop in const to set the state 
        const newCoin1 = this.props.facesArr[
            Math.floor(Math.random() * 2)
        ];

        if(newCoin1 === "heads") {
            this.state.c1HeadsCount += 1; // adds to head count for coin 1
        } else {
            this.state.c1TailsCount += 1; // adds to tail count for coin 1
        }

        this.state.c1TotalFlips += 1; // adds to total flips for coin 1
        this.setState({ coin1: newCoin1 });
    }

    handleClick() {
        this.flip();
    }

    render() {
        return (
            <section className='CoinFlip'>
                <h1>{this.props.title}</h1>
                <Coin face={this.state.coin1} />
                <div>
                    <button onClick={this.handleClick}>Flip</button>
                    <p>
                        {`Out of ${this.state.c1TotalFlips} flips, there have been ${this.state.c1HeadsCount} and 
                        ${this.state.c1TailsCount} tails.`}
                    </p>
                </div>
            </section>
        );
    }
}

export default CoinFlip;