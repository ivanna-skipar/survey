const PlayersAPI = {
    players: [
        { number: 1, name: 'Neymar', position: 'Center' },
        { number: 2, name: 'Neymar-2', position: 'Center' },
        { number: 3, name: 'Neymar-3', position: 'Center' },
        { number: 4, name: 'Neymar-4', position: 'Center' }
    ],
    all: function() {
        return this.players
    },
    get: function(id) {
        return this.players.filter( p => p.number === id )[ 0 ];
    },
    add: function(e){
        this.players.push(e)
        return this.players
    },
    delete: function(id){
        let key = id*1-1;
        delete this.players[key];
        return this.players
    }
}

export default PlayersAPI;