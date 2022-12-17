import './App.css';
import React from "react";
import Cell from "./Cell";



class App extends React.Component {
    state = {
        player1:1,
        player2:2,
        currentPlayer: 1,
        board:
            [
                ['', '', '', '', '', '', ''],
                ['', '', '', '', '', '', ''],
                ['', '', '', '', '', '', ''],
                ['', '', '', '', '', '', ''],
                ['', '', '', '', '', '', ''],
                ['', '', '', '', '', '', '']
            ]

    }



    cellClicked = (cell) =>{
        let currentColor = this.state.board;
        for (let i = 5; i >= 0; i--) {
            if (currentColor[i][cell]==='' ){
                currentColor[i][cell] = this.state.currentPlayer;
                this.setState({
                    board: currentColor,
                    currentPlayer: this.switchPlayer(),
                })
                break
            }



        }

    }


    switchPlayer () {
        return (this.state.currentPlayer === this.state.player1) ? this.state.player2 : this.state.player1;
    }
    render() {
        return (
            <div className={"App"}>
                <label> </label>
                <table>
                    {
                        this.state.board.map((row, rowIndex) => {
                            return(
                                <tr>
                                    {
                                        row.map((cell, cellIndex) =>{
                                            return(
                                                <Cell
                                                    value = {this.state.board[rowIndex][cellIndex]}
                                                    cellClicked = {this.cellClicked}
                                                    row = {rowIndex}
                                                    cell = {cellIndex}
                                                />
                                            )
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
        );
    }

}


export default App;