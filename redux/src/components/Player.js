import React from 'react'
import PlayerAPI from './api'
import { Link } from 'react-router-dom'

const Player = (props) => {
    const player = PlayerAPI.get(
        parseInt(props.match.params.number, 10)
    );

    if ( !player ) {
        return <div>404 cant find player by id</div>
    }

    return (
        <div>
          <h1>{player.name} (#{player.number})</h1>
          <h2>Position: {player.position}</h2>
          <Link to='/players'>Back</Link>
        </div>
      )
}

export default Player;