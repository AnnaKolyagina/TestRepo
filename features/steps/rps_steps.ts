import { Given, When, Then } from '@cucumber/cucumber';
import { RockPaperScissors, Moves } from "../../config/rps";
import { expect } from 'chai';

let game: RockPaperScissors;
let botMove: Moves = 'rock';           
let playerMove: Moves = 'rock';        
let chosenMove: Moves = 'rock';        
let result: string | null = null;      
let error: string | null = null;

Given('a bot generates a move and a player generates a move', function () {
  game = new RockPaperScissors();
  botMove = 'rock';
  playerMove = 'rock';
  result = null;
});

Given('I have a valid set of moves', function () {
  game = new RockPaperScissors();
  error = null;
});

When(
  'a bot generates {string} and a player generates {string}',
  function (bot: Moves, player: Moves) {
    botMove = bot;
    playerMove = player;
    result = game.determineWinner(playerMove, botMove);
  }
);

When('I choose one valid move', function () {
  chosenMove = game.generateMove();
  if (!game.moves.includes(chosenMove)) {
    error = 'Generated move is not valid';
  }
});

Then('result is draw', function () {
  expect(result).to.equal('draw');
});

Then('result is bot', function () {
  expect(result).to.equal('bot');
});

Then('result is player', function () {
  expect(result).to.equal('player');
});

Then("I don't see any errors", function () {
  expect(error).to.be.null;
});