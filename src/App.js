import React, { Component } from 'react';
import GameBoard from './components/GameBoard';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <GameBoard />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
