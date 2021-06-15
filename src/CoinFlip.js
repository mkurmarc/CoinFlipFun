import React, { Component } from 'react';
import Coin from './Coin';
import './Coin.css';

class CoinFlip extends Component {
    static defaultProps ={
        title: "Let's Flip This Coin",
        counter: 0,
        facesArr: ["heads", "tails"]
    };

    constructor(props) {
        super(props);
        this.state = {
            
        };
        this.handleClick = this.handleClick.bind(this);
    }

    flip() {
        console.log(this.props.facesArr[Math.floor(Math.random() * 2)]);
        
    }

    handleClick() {
        this.flip();
    }

    render() { 
        return (
            <section className='CoinFlip'>
                <h1>{this.props.title}</h1>
                <Coin face={'heads'} />
                <div>
                    <button onClick={this.handleClick}>Flip</button>
                </div>                
            </section>
        );
    }
}
 
export default CoinFlip;