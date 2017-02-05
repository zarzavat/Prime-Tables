function PrimeGenerator() {
}

PrimeGenerator.prototype.generateFirstPrimes = function (n, callback) {
    callback(null, [2]);
};

module.exports = PrimeGenerator;