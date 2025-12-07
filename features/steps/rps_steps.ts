import { Given, When, Then } from '@cucumber/cucumber';
import { strict as assert } from 'assert';

type Move = 'rock' | 'paper' | 'scissors';
type Result = 'bot' | 'player' | 'draw';

let botMove: Move;
let playerMove: Move;
let generatedMove: string | undefined;
let result: Result | undefined;
let lastError: Error | undefined;

Given('I have a valid set of moves', function () {
  generatedMove = 'rock';
});

When('I choose one valid move', function () {
  lastError = undefined;
  if (!['rock', 'paper', 'scissors'].includes(generatedMove!)) {
    lastError = new Error('Generated move is not valid');
    throw lastError;
  }
});

Then("I don't see any errors", function () {
  assert.ok(!lastError, 'Expected no error');
});

Given('I have an invalid set of moves', function () {
  generatedMove = 'invalid1';
});

When('I choose one invalid move', function () {
  lastError = undefined;
  try {
    if (!['rock', 'paper', 'scissors'].includes(generatedMove!)) {
      throw new Error('Generated move is not valid');
    }
  } catch (e) {
    lastError = e as Error;
  }
});

Then('I see an error: {string}', function (msg: string) {
  assert.ok(lastError, 'Expected an error but none was thrown');
  assert.equal(lastError!.message, msg);
});

Given('a bot makes a move and a player makes a move', function () {
});

Given('a player makes a move and a bot makes a move', function () {
});

When('a bot has {string} and a player has {string}', function (bot: Move, player: Move) {
  botMove = bot;
  playerMove = player;

  if (botMove === playerMove) {
    result = 'draw';
  } else if (
    (botMove === 'rock' && playerMove === 'scissors') ||
    (botMove === 'paper' && playerMove === 'rock') ||
    (botMove === 'scissors' && playerMove === 'paper')
  ) {
    result = 'bot';
  } else {
    result = 'player';
  }
});

When('a player has {string} and a bot has {string}', function (player: Move, bot: Move) {
  playerMove = player;
  botMove = bot;

  if (botMove === playerMove) {
    result = 'draw';
  } else if (
    (botMove === 'rock' && playerMove === 'scissors') ||
    (botMove === 'paper' && playerMove === 'rock') ||
    (botMove === 'scissors' && playerMove === 'paper')
  ) {
    result = 'bot';
  } else {
    result = 'player';
  }
});

Then('result is draw', function () {
  assert.equal(result, 'draw');
});

Then('a result is {string}', function (expected: Result) {
  assert.equal(result, expected);
});
