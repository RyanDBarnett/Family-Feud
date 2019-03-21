import Round from "./Round";
import FinalRound from "./FinalRound";
import gamedata from './gamedata.js';

class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.currentRound = 0;
    this.usedSurveys = [];
    this.winner = null;
  }

  startNewRound(game) {
    if (this.currentRound < 2) {
      this.currentRound++;
      let round = new Round(game);
    } else {
      this.currentRound = 3;
      let finalRound = new FinalRound(game);
    }
  }
}

export default Game;