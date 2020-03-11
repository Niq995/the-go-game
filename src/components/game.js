import React, { Component } from 'react';
import { Board } from './board';
import './game.css';

class Game extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(81).fill(null),
      }],
      xIsNext: true,
      stepNumber: 0,
    };
  }

  handleClick(i) {
    const history = this.state.history;
    const current = history[history.length - 1]; //current state of squares
    const squares = current.squares.slice();

    //here can be set to remove icon
    //console.log("starting with", current.squares[i]);
    if (current.squares[i] === null) {
      squares[i] = this.state.xIsNext ? '●' : '○';
    }
    else {
      squares[i] = null;
    }

    this.setState({
      history: history.concat([{
        squares: squares,
      }]),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length,
    });
  } 
  
  //handle pass player
  handleClick2(){
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1]; //current state of squares
    const squares = current.squares.slice();
    
    this.setState({
      history: history.concat([{
        squares: squares,
      }]),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length,
    });
    
  }
  
  jumpTo(step) {
    // do something to history to remove all the steps past (step)
    const newHistory = this.state.history.slice(0, step + 1);
    //console.log("new history is", newHistory);
    
    this.setState({
      history: newHistory,
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }
  
  render() {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[this.state.stepNumber];
    let status = 'Next player: ' + (this.state.xIsNext ? '●' : '○');
    
    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key={move}>
          <button className="btn btn-success"
                  onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });
    
    
    return (
      <div className="game">
        <div className="game-board">
          <Board 
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
            />
        </div>
        <div className="game-info">
          <div><button type="button" class="btn btn-success" onClick={()=> this.handleClick2()}>Pass Your Turn</button></div>
          <div><mark>{status}</mark></div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
  
  
}

export { Game  }