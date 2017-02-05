var Matrix = require('node-matrix');

function PrimeTableCalculator(primeGenerator) {
    this.generator = primeGenerator;
}

PrimeTableCalculator.prototype.generateMatrix = function (n, callback) {
    var matrix = new Matrix({ rows: n + 1, columns: n + 1 });
    this.generator.generateFirstPrimes(n, function (err, primes) {
        matrix[0][0] = null;
        for (var i = 0; i < primes.length; i++) {
            //set first row
            matrix[0][i + 1] = primes[i];
            //set first column
            matrix[i + 1][0] = primes[i];
            //set the rest by multiplying
            for (var j = 0; j < primes.length; j++) {
                matrix[i + 1][j + 1] = primes[i] * primes[j];
            }
        }
        callback(null, matrix);
    });

};

module.exports = PrimeTableCalculator;