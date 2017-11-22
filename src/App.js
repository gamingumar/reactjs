import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    data: null
  }
  async componentDidMount() {
    console.log('component mounted');

    const response = await axios.get('/api/match-detail');

    this.setState({
      data: (response.data.result) ? response.data.result : null 
    });

    console.log('state: ', this.state.data);

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Dota Match Player Info</h1>
        </header>

        <table className='table' cellPadding={5} style={{ margin: 50 }} border='1'>
          <thead>
            <tr>
              <th>Player Slot</th>
              <th>Account Id</th>
              <th>Hero Id</th>
              <th>Kills</th>
              <th>Deaths</th>
              <th>Assists</th>
              <th>Level</th>
              <th>Gold</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.data &&
              this.state.data.players.map((player) => {
                return (
                  <tr key={player.player_slot}>
                    <td>{player.player_slot}</td>
                    <td>{player.account_id}</td>
                    <td>{player.hero_id}</td>
                    <td>{player.kills}</td>
                    <td>{player.deaths}</td>
                    <td>{player.assists}</td>
                    <td>{player.level}</td>
                    <td>{player.gold}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
