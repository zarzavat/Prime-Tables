function PrimeGenerator() {
}

PrimeGenerator.prototype.generateFirstPrimes = function (n, callback) {
    var currentNumberToCheck = 2;
    var generatedPrimes = [];
    while (generatedPrimes.length < n) {
        if (isPrime(currentNumberToCheck)) {
            generatedPrimes.push(currentNumberToCheck);
        }
        currentNumberToCheck += 1;
    }
    callback(null, generatedPrimes);
};

function isPrime(n, callback) {
    if (n === 2) {
        return true;
    }
    for (var i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

module.exports = PrimeGenerator;