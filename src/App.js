import logo from './logo.svg';
import './App.css';
import React from "react";
import Cell from "./Cell";



class App extends React.Component {
  state = {
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



  cellClicked = (row,cell) =>{
      let currentColor = this.state.board;
      let currentCell;
      currentCell = {(cellInfo) => ({
        style:{
            background:cellInfo.background = "white" ? "yellow" : "white"
        }
      })}
      this.setState({
          board: currentColor
      })
  }

    render() {
        return (
            <div className={"App"}>
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
