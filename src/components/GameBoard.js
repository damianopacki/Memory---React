import React from 'react';
import Card from './Card';
import './GameBoard.css';


export default class GameBoard extends React.Component {

    constructor() {
        super();   
        this.state = {          
            squares: Array(16).fill(this.shuffle([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8]))
        };
        this.fillBoard();
    }

    fillBoard() {
        this.state.squares.forEach((square, index) => {
            console.log(square);
            // this.state.squares.push(<Card value={index} key="index"/>);
            this.state.squares[index] = <Card value={square[index]} />
        })       
    }

    shuffle(array) {
        let counter = array.length;
        // While there are elements in the array
        while (counter > 0) {
            // Pick a random index
            let index = Math.floor(Math.random() * counter);
            // Decrease counter by 1
            counter--;
            // And swap the last element with it
            let temp = array[counter];
            array[counter] = array[index];
            array[index] = temp;
        }
        return array;
    }
    
    render() {
        return (
            <div className="board">
                {this.state.squares}
            </div>
        );
    }
}