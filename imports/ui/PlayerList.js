import React from 'react';
import Player from './Player';
import FlipMove from 'react-flip-move';
  
class PlayerList extends React.Component {
    renderPlayers() {
        if(this.props.players.length === 0) {
            return (
                <div className="item">
                    <p className="item__message">Please enter a player's first name to get started.</p>
                </div>
            )
        } else {
            return this.props.players.map((player) => {
                return <Player key={player._id} player={player} />
            });
        }
    }
    
    render() {
        return (
            <FlipMove maintainContainerHeight={true}>
                {this.renderPlayers()}
            </FlipMove>
        )
    }

}

PlayerList.propTypes = {
    players: React.PropTypes.array.isRequired
}

export default PlayerList;