function PrimeGenerator() {
}

PrimeGenerator.prototype.generateFirstPrimes = function (n, callback) {
    callback(null, Array(n).fill(2));
};

module.exports = PrimeGenerator;