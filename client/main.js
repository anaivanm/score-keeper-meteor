import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

const players = [{
  _id: '1',
  name: 'Lauren',
  score: 99
},
{
  _id: '2',
  name: 'Corey',
  score: 1
},
{
  _id: '3',
  name: 'Andrew',
  score: 3
}];

const renderPlayers = function (playerList) {
  return players.map(function (player) {
    return <p key={player._id}>{player.name} has {player.score} point(s).</p>
  });
};

Meteor.startup(function () {
  let jsx = (
    <div>
      {renderPlayers(players)}
    </div>
  );
  ReactDOM.render(jsx, document.getElementById('root'));
});
