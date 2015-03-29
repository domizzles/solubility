module.exports = {
	Insoluble: [],

	init: function () {
		for (var i = 0; i < 12; i++)
			this.Insoluble.push([]);

		var column;

		for (column = 0; column < 12; column++) {
			for (var i = 0; i < 6; i++)
				this.Insoluble[i][column] = false;

			for (var i = 6; i < 9; i++) {
				if (column < 3) this.Insoluble[i][column] = false;
				else this.Insoluble[i][column] = true;
			}

			for (var i = 9; i < 12; i++) {
				if (column < 6 || column === 11) this.Insoluble[i][column] = false;
				else this.Insoluble[i][column] = true;
			}
		}

		return this;
	},

	checkSolubility: function (checkCat1, checkCat2, checkAn1, checkAn2) {
		return (!this.Insoluble[checkCat1][checkAn1] || !this.Insoluble[checkCat2][checkAn2]);
	},

	getRule: function (catt, ann) {
		return this.Insoluble[catt][ann];
	}
}
