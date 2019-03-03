import React, { Component } from 'react'
import PlayerAPI from './api'
import { Link } from 'react-router-dom'

class FullPlayers extends Component {
  constructor() {
    super();
    this.state = {
      players: PlayerAPI.all(),
      newPlayer: ''
    }
    this.delete = this.delete.bind(this)
    this.newPlayerData = this.newPlayerData.bind(this);
    this.add = this.add.bind(this)
  }

  delete(e) {
    this.setState({
      players: PlayerAPI.delete(e.target.id*1),
  }) 
    /*
    console.log('del', e.target.id)
    let newPlayers = this.state.players.filter(p => p.number.toString() !== e.target.id);
    this.setState({
      players: newPlayers,
      newPlayer: ''
    })
    */
  }

  newPlayerData() {
    let form = document.getElementById('addPlayer');
    let newPlayer = {
      number: this.state.players.length + 1,
      name: form.playerName.value,
      position: form.playerPosition.value
    }
    this.setState({
      newPlayer: newPlayer
    })
    console.log(newPlayer)
  }

  add() {
    this.setState({
      players: PlayerAPI.add(this.state.newPlayer),
      newPlayer: ''
    })
    document.getElementById('addPlayer').reset();
  }

  render() {
    return (
      <div>
        < br />
        <form id="addPlayer" onChange={this.newPlayerData}>
          <input type='text' name="playerName" placeholder="write player's name"></input>
          <input type='text' name="playerPosition" placeholder="write player's Position"></input>
          <input type="button" value="Add New Player" onClick={this.add}></input>
        </form>
        <ul>
          {
            this.state.players.map(p => (
              <li key={p.number}>
                <Link to={`/players/${p.number}`}>{p.name}</Link><br />
                <a href='#' id={p.number} onClick={this.delete}>DELETE</a>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }

}

export default FullPlayers;