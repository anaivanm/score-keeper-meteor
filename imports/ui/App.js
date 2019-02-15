import React from 'react';
import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';

class App extends React.Component {
    render() {
        return (
            <div>
                <TitleBar title={this.props.title} />
                <PlayerList players={this.props.players} />
                <AddPlayer />
            </div>
        )
    }
}
App.propTypes = {
    title: React.PropTypes.string.isRequired,
    players: React.PropTypes.string.isRequired
}
export default App;