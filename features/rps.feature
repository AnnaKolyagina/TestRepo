Feature: RockPaperScissors;

Scenario: valid moves
Given I have a valid set of moves
When I choose one valid move
Then I don't see any errors

Scenario: invalid moves
Given I have an invalid set of moves
When I choose one invalid move
Then I see an error: "Generated move is not valid"

Scenario: a draw with a rock
Given a bot makes a move and a player makes a move
When a bot has "rock" and a player has "rock"
Then result is draw

Scenario: a draw with a paper
Given a bot makes a move and a player makes a move
When a bot has "paper" and a player has "paper"
Then result is draw

Scenario: a draw with the scissors
Given a bot makes a move and a player makes a move
When a bot has "scissors" and a player has "scissors"
Then result is a "draw"

Scenario: a bot wins with a rock
Given a bot makes a move and a player makes a move
When a bot has "rock" and a player has "scissors"
Then a result is a "bot"

Scenario: a bot wins with a paper
Given a bot makes a move and a player makes a move
When a bot has "paper" and a player has "rock"
Then a result is a "bot"

Scenario: a bot wins with the scissors
Given a bot makes a move and a player makes a move
When a bot has "scissors" and a player has "paper"
Then a result is a "bot"

Scenario: a player wins with a rock
Given a player makes a move and a bot makes a move
When a plater has "rock" and a bot has "scissors"
Then a result is a "player"

Scenario: a player wins with a paper
Given a player makes a move and a bot makes a move
When a player has "paper" and a bot has "rock"
Then a result is a "player"

Scenario: a player wins with the scissors
Given a player makes a move and a bot makes a move
When a player has "scissors" and a bot has "paper"
Then a result is a "player"


