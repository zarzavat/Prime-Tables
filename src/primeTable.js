var Matrix = require('node-matrix');

function PrimeTable(primeGenerator) {
    this.generator = primeGenerator;
}

PrimeTable.prototype.generateMatrix = function (n, callback) {
    var matrix = new Matrix({ rows: n + 1, columns: n + 1 });
    this.generator.generateFirstPrimes(n, function (err, primes) {
        matrix[0][0] = null;
        matrix[0][1] = 2;
        matrix[1][0] = 2;
        matrix[1][1] = 4;
        callback(null, matrix);
    });

};

module.exports = PrimeTable;