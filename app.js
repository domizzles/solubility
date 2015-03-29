var express = require('express');

var SolubilityProblem = require('./resources/SolubilityProblem');

var app = express();

app.set('title', 'Solubility Rules');
app.get('/', express.static(__dirname));

app.get('/problem', function (req, res, next) {
    var problem = SolubilityProblem.init();
    res.send({
        problem: problem.getQuestion(),
        solution: problem.getAnswer(),
        bool: problem.getP()
    });
});

app.listen(process.env.PORT);