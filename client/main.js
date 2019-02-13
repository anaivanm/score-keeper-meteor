import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Players } from './../imports/api/players';
import { Tracker } from 'meteor/tracker';

const renderPlayers = (playerList) => {
  return playerList.map((player) => {
      return (
        <p key={player._id}>
          {player.name} has {player.score} point(s).
            <button onClick={() => Players.update({ _id: player._id }, { $inc: { score: 1 } })}>+</button>
            <button onClick={() => Players.update({ _id: player._id }, { $inc: { score: -1 } })}>-</button>
            <button onClick={() => Players.remove({ _id: player._id })}>x</button>
        </p>
      )
    });
};
const handleSubmit = (e) => {
  e.preventDefault();
  let playerName = e.target.playerName.value;
  if (playerName) {
    e.target.playerName.value = '';
      Players.insert({
        name: playerName,
        score: 0
      });
  }
}

Meteor.startup(() => {
  Tracker.autorun(() => {
    let players = Players.find().fetch();
    let title = 'Score Keeper';
      let jsx = (
        <div>
          <h1>{title}</h1>
          {renderPlayers(players)}
          <form onSubmit={handleSubmit}>
            <input type="text" name="playerName" placeholder="Player Name" />
            <button>Add player</button>
          </form>
        </div>
      );
  ReactDOM.render(jsx, document.getElementById('root'));
  });
});
