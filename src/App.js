import './App.css';
import React from "react";

class App extends React.Component {

    state = {
        player1: 1,
        player2: 2,
        currentPlayer: null,
        board: [],
        gameOver: false,
    };

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
            gameOver: false,
        });
    }

    togglePlayer() {
        return (this.state.currentPlayer === this.state.player1) ? this.state.player2 : this.state.player1;
    }

    play=(c)=> {
        alert("hi")
        let board = this.state.board;
        for (let r = 5; r >= 0; r--) {
            if (!board[r][c]) {
                board[r][c] = 1;
                break;
            }
        }
        this.setState({ board , currentPlayer: this.togglePlayer() });
    }

    componentWillMount() {
        this.initBoard();
    }

    Cell = ( value, columnIndex) => {
        let color = 'white';
        if (value === 1) {
            color = 'red';
        } else if (value === 2) {
            color = 'yellow';
        }
        return (
            <td>
                <div className="cell" onClick={() => {this.play(columnIndex)}}>
                    <div className={color}></div>
                </div>
            </td>
        );
    };

    Row = ( row, play ) => {
        return (
            <tr>
                {row.map((cell, i) => <Cell key={i} value={cell} columnIndex={i} play={play}/>)}
            </tr>
        );
    };



    render() {
        debugger
        return (
            <div>
                <h1>Connect 4</h1>
                <div className="button" onClick={() => {this.initBoard()}}>New Game</div>
                <table>
                    <tbody>
                    {this.state.board.map((row, i) => (<Row key={i} row={row} play={this.play} />))}
                    </tbody>
                </table>
            </div>
        );
    }

}



export default App;
