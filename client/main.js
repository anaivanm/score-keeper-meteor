import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Players, playerPositions } from './../imports/api/players';
import { Tracker } from 'meteor/tracker';
import App from './../imports/ui/App';

Meteor.startup(() => {
  Tracker.autorun(() => {
    let players = Players.find({}, {sort: { score: -1, name: 1 }}).fetch();
    let positionedPlayers = playerPositions(players);
    let title = 'Score Keeper';
  ReactDOM.render(<App title={title} players={positionedPlayers} />, document.getElementById('root'));
  });
});
