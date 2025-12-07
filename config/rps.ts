export type Moves = 'rock' | 'paper' | 'scissors';

export class RockPaperScissors {
  moves: Moves[] = ['rock', 'paper', 'scissors'];

  generateMove(): Moves {
    const randomIndex = Math.floor(Math.random() * this.moves.length);
    return this.moves[randomIndex];
  }

  determineWinner(player: Moves, bot: Moves) {
    if (player === bot) return 'draw';
    const playerIndex = this.moves.indexOf(player);
    const botIndex = this.moves.indexOf(bot);
    const result = playerIndex - botIndex;
    if (result === -1 || result === this.moves.length - 1) return 'bot';
    return 'player';
  }
}
