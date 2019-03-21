import gamedata from '../src/gamedata.js';
import Game from './Game.js';

class Round {
  constructor(game) {
    this.survey = this.getSurvey(gamedata.surveys, game);
    this.answers = this.getAnswers(gamedata.answers);
  }
  
  getSurvey(surveys, game) {
    let randomIndex = Math.floor(Math.random() * surveys.length);
    while (game.usedSurveys.includes(randomIndex)) {
      randomIndex = Math.floor(Math.random() * surveys.length)
    }
    game.usedSurveys.push(randomIndex);
    return gamedata.surveys[randomIndex];
  }

  getAnswers(answers) {
    return answers.filter((answer) => {
      return answer.surveyId === this.survey.id;
    }, this);
  }
}

export default Round;