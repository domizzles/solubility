var prompt = require('prompt');

var SolubilityProblem = require('./resources/SolubilityProblem');

var corectScoreAmount = 0;
var incorrectScoreAmount = 0;
var cheat = true;
var problem;

var beginFunTimes = function (done) {
    if (done && parseInt(done)) return;

    problem = SolubilityProblem.init()
    console.log(problem.getQuestion());
    prompt.get(['answer'], function (err, result) {
        console.log(parseInt(result.answer) == problem.getP());
        console.log(problem.getAnswer());
        console.log('done?');
          prompt.get(['done'], function (err, result2) {
            beginFunTimes(result2.done);
          });
    });
}

beginFunTimes();