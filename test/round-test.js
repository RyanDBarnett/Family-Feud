import chai from 'chai';
const expect = chai.expect;

import gamedata from '../src/gamedata.js';

describe('Round class tests', function() {
  describe('Property Tests', function() {
    it('should have a survey property', function() {
      const round = new Round();
      expect(round).to.have.property(survey);
    });
    it('should have answers property', function() {
      const round = new Round();
      expect(round).to.have.property(answers);
    });
    it('should have a survey object assigned to the survey property', function() {
      const round = new Round();
      expect(round.survey).to.be.an('object');
      expect(round.survey).to.have.all.keys('id','question');
    });
    it('should have an array of answer objects assigned to the answers property', function() {
      const round = new Round();
      expect(round.answers).to.be.an('array');
      expect(round.answers[0]).to.be.an('object');
      expect(round.answers[0]).to.have.all.keys('answer','respondents','surveyId');
    });
    describe('Each answer object', function() {
      it('should have an id that matches the round survey', function() {
        const round = new Round();
        expect(round.survey.id).to.equal(round.answers[0].surveyId);
      });
    });
  });
  describe('Method tests', function() {
    it('should have a getSurvey method', function() {
      const round = new Round();
      expect(round).to.respondTo('getSurvey');
    });
    describe('getSurvey method', function() {
    });
    it('should have a getAnswers method', function() {
      const round = new Round();
      expect(round).to.respondTo('getAnswers');
    });
  });
});