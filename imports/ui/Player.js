import React from 'react';
import { Players } from './../api/players';

class Player extends React.Component {
    render() {
        return (
            <p key={this.props.player._id}>{this.props.player.name} has {this.props.player.score} point(s).
                <button onClick={() => Players.update(this.props.player._id, { $inc: { score: 1 } })}>+</button>
                <button onClick={() => Players.update(this.props.player._id, { $inc: { score: -1 } })}>-</button>
                <button onClick={() => Players.remove(this.props.player._id)}>x</button>
            </p>
        )
    }
}

Player.propTypes = {
    player: React.PropTypes.object.isRequired
}
export default Player;