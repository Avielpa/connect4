import './App.css';
import React from "react";
import Cell, {value} from "./Cell";
import cell from "./Cell";
import {keyboard} from "@testing-library/user-event/dist/keyboard";



class App extends React.Component {
    state = {
        player1: 1,
        player2: 2,
        currentPlayer: 1,
        gameOver: false,
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


    cellClicked = (cell) => {
        let currentColor = this.state.board;
        if (!this.state.gameOver) {
            for (let i = 5; i >= 0; i--) {
                if (currentColor[i][cell] === '') {
                    currentColor[i][cell] = this.state.currentPlayer;
                    this.setState({
                        board: currentColor,
                        currentPlayer: this.switchPlayer(),
                    })
                    break
                }
            }
        }
    }

    switchPlayer() {
            this.checkAll()
            return (this.state.currentPlayer === this.state.player1) ? this.state.player2 : this.state.player1;


    }


    checkAll () {
        if (this.checkDiagonalRight() || this.checkHorizontal()
        || this.checkVertical() || this.checkDiagonalLeft()){
            this.state.gameOver = true
            alert("Fuck")
        }
    }
    checkHorizontal() {
        let board = this.state.board
        let win = false
        for (let r = 0; r < 6; r++) {
            for (let c = 0; c < 4; c++) {
                if (board[r][c]) {
                    if (board[r][c] === board[r][c + 1] &&
                        board[r][c] === board[r][c + 2] &&
                        board[r][c] === board[r][c + 3]) {
                        win = true
                        return win
                    }
                }
            }
        }
    }

    checkVertical() {
        let board = this.state.board
        let win = false;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 7; j++) {
                if (board[i][j]) {
                    if (board[i][j] === board[i + 1][j]
                        && board[i][j] === board[i + 2][j]
                        && board[i][j] === board[i + 3][j]) {
                        win = true
                        return win
                    }
                }

            }
        }
    }

    checkDiagonalRight(){
        let board = this.state.board
        let win = false
        for (let x = 3; x < 6 ; x++) {
            for (let y = 0; y < 4; y++) {
                if (board[x][y]){
                    if (board[x][y] === board[x-1][y+1] &&
                        board[x][y] === board[x-2][y+2] &&
                        board[x][y] === board[x-3][y+3]){
                        win = true
                        return win
                    }
                }

            }
        }
    }

    checkDiagonalLeft(){
        let board = this.state.board
        let win = false
        for (let r = 3; r < 6 ; r++) {
            for (let p = 3; p < 7; p++) {
                if (board[r][p]){
                    if (board[r][p] === board[r-1][p+1] &&
                        board[r][p] === board[r-2][p+2] &&
                        board[r][p] === board[r-3][p+3]){
                        win = true
                        return win
                    }
                }
            }
        }
    }



    



    render() {
        return (
            <div className={"App"}>
                <label> </label>
                <table>
                    {
                        this.state.board.map((row, rowIndex) => {
                            return (
                                <tr>
                                    {
                                        row.map((cell, cellIndex) => {
                                            return (
                                                <Cell
                                                    value={this.state.board[rowIndex][cellIndex]}
                                                    cellClicked={this.cellClicked}
                                                    row={rowIndex}
                                                    cell={cellIndex}
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