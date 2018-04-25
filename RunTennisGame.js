import { default as TennisGame } from './TennisGame1';

const game = new TennisGame();

game.wonPoint('player1');
game.wonPoint('player1');
game.wonPoint('player2');

console.log(game.getScore());
