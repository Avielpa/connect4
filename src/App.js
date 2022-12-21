import './App.css';
import React from "react";
import Cell from "./Cell";



class App extends React.Component {
    state = {
        player1:1,
        player2:2,
        currentPlayer: null,
        board: [],
        gameOver: false,
        write: '',
        l_color: ''
    }

    initBoard() {
        let board = [];
        for (let r = 0; r < 6; r++) {
            let row = [];
            for (let c = 0; c < 7; c++) { row.push(null) }
            board.push(row);
        }

        this.setState({
            board,
            currentPlayer: this.state.player1,
            write: 'Red player turn',
            gameOver: false,
            text_color: 'red'
        });
    }

    cellClicked = (row,cell) => {
        let currentColor = this.state.board;
        if (!this.state.gameOver) {
            for (let i = 5; i >= 0; i--) {
                if (currentColor[i][cell] === null) {
                    currentColor[i][cell] = this.state.currentPlayer;
                    this.setState({
                        board: currentColor,
                        currentPlayer: this.switchPlayer(),
                    })
                    this.checkAll(row, cell);
                    break
                }
            }
        }
    }


    checkAll () {
        if (this.checkDiagonalRight() || this.checkHorizontal()
            || this.checkVertical() || this.checkDiagonalLeft()){
            this.setState({
                gameOver: true
            })
            if(this.state.currentPlayer === 1){
                this.setState({
                    write: "Red player wins!",
                    text_color: 'red'
                })
            }
            else {
                this.setState({
                    write: "Yellow player wins!",
                    text_color: 'yellow'
                })
            }
        }else {
            let count = 0
            for (let i = 0; i < 7; i++) {
                if(this.state.board[0][i] === null){
                    break;
                }
                else {
                    count = count + 1;
                }
            }
            if(count===7) {
                this.setState({
                    gameOver: true,
                    write: "it's draw",
                    text_color: 'black'
                })
            }
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
                    if (board[r][p] === board[r-1][p-1] &&
                        board[r][p] === board[r-2][p-2] &&
                        board[r][p] === board[r-3][p-3]){
                        win = true
                        return win
                    }

                }
            }
        }
    }


    switchPlayer () {

        if(this.state.currentPlayer === this.state.player1) {
            this.setState({
                write: 'Yellow player turn',
                text_color: 'yellow'
            })
            return(this.state.player2)
        } else {
            this.setState({
                currentPlayer: this.state.player1,
                write: 'Red player turn',
                text_color: 'red'
            })
            return(this.state.player1)
        }
    }


    componentWillMount() {
        this.initBoard();
    }


    render() {
        return (
            <div className={"App"}>
                <h1>Connect4</h1>
                <hr/>
                <h2><div className={"write"} style={{color: this.state.text_color}}>{this.state.write}</div></h2>
                <div className={"tb"}>
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
                <br/><hr/><br/>
                <div className="button" onClick={() => {this.initBoard()}}>New Game</div>
            </div>
        );
    }

}


export default App