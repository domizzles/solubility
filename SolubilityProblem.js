var Cations = require('./CationChart');
var Anions = require('./AnionChart');
var SolubilityChart = require('./SolubilityChart');

module.exports = {
    question: '',
    feedback: '',
    precipitate1: false,
    precipitate2: false,
    precip1: '',
    precip2: '',
    comp: '',

    init: function () {
        this.question = '';
        this.feedback = '';
        this.precipitate1 = false;
        this.precipitate2 = false;
        this.precip1 = '';
        this.precip2 = '';
        this.comp = '';

        var cation1, cation2, anion1, anion2;

        var SolubilityRules = SolubilityChart.init();

        cation1 = Math.floor(Math.random() * 12);
        cation2 = Math.floor(Math.random() * 12);
        anion1 = Math.floor(Math.random() * 12);
        anion2 = Math.floor(Math.random() * 12);

        while (cation1 === cation2)
            cation1 = Math.floor(Math.random() * 12);

        while (anion1 === anion2)
            anion1 = Math.floor(Math.random() * 12);

        var validate = SolubilityRules.checkSolubility(cation1, cation2, anion1, anion2);

        while (!validate)
        {
            cation1 = Math.floor(Math.random() * 12);
            anion1 = Math.floor(Math.random() * 12);

            while (cation1 === cation2)
                cation1 = Math.floor(Math.random() * 12);

            while (anion1 === anion2)
                anion1 = Math.floor(Math.random() * 12);

            validate = SolubilityRules.checkSolubility(cation1, cation2, anion1, anion2);
        }

        this.question = Cations[cation1] + ' ' + Anions[anion1] + ' reacts with ' + Cations[cation2] + ' ' + Anions[anion2];

        if (SolubilityRules.getRule(cation1, anion2))
        {
            this.precipitate1 = true;
            this.precip1 = Cations[cation1] + ' ' + Anions[anion2];
        }

        if (SolubilityRules.getRule(cation2, anion1))
        {
            this.precipitate2 = true;
            this.precip2 = Cations[cation2] + ' ' + Anions[anion1];
        }

        return this;
    },

    getAnswer: function () {
        if (this.precipitate1 && this.precipitate2)
            this.feedback = this.precip1 + " and " + this.precip2 + " forms";
        else if (this.precipitate1)
            this.feedback = this.precip1 + " forms";
        else if (this.precipitate2)
            this.feedback = this.precip2;
        else
            this.feedback = "Nothing forms";
        return this.feedback;
    },

    getQuestion: function () {
        return this.question;
    },

    getPrecip: function () {
        if (this.precipitate1 && this.precipitate2)
            this.comp = this.precip1 + " and " + this.precip2;
        else if (this.precipitate1)
            this.comp = this.precip1;
        else if (this.precipitate2)
            this.comp = this.precip2;
        else
            this.comp = "nothing forms";
        return this.comp;
    },

    getP: function () {
        return (this.precipitate1 || this.precipitate2);
    }
}
