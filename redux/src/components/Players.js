import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Player from './Player';
import FullPlayers from './FullPlayers';

const Players = () => (
    <Switch>
        <Route exact path='/players' component={FullPlayers} />
        <Route path='/players/:number' component={Player} />
    </Switch>
)

export default Players;