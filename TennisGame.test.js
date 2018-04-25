import { default as TennisGame } from './TennisGame1';

describe('tennis game', function() {
  it('scores fifteen-all', () => {
    const tennisGame = new TennisGame();
    tennisGame.wonPoint('player1');
    tennisGame.wonPoint('player2');

    expect(tennisGame.getScore()).toEqual('Fifteen-All');
  });
});