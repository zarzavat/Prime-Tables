var sprintf = require('sprintf-js').sprintf;
var Matrix = require('node-matrix');

function PrimeTableDisplay(primeTableCalculator) {
    this.primeTableCalculator = primeTableCalculator;
}

PrimeTableDisplay.prototype.getFormattedString = function (n, callback) {
    this.primeTableCalculator.generateMatrix(n, function (err, matrix) {
        var dim = matrix.dimensions[0];
        var generatedString = '';
        var maximum = matrix[dim - 1][dim - 1];
        var maxLength = String(maximum).length;
        for (var i = 0; i < dim; i++) {
            for (var j = 0; j < dim; j++) {
                var element = matrix[i][j] == null ? '' : matrix[i][j];
                var formatLength = j === 0 ? maxLength : maxLength + 1;
                var format = `%${formatLength}s`;
                generatedString += sprintf(format, element);
            }
            generatedString += '\n';
        }
        callback(null, generatedString);

    });

};

module.exports = PrimeTableDisplay;