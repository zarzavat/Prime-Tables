function PrimeGenerator() {
}

PrimeGenerator.prototype.generateFirstPrimes = function (count, callback) {
    var currentNumberToCheck = 2;
    var generatedPrimes = [];
    function isPrime(number) {
        var sqrt = Math.sqrt(number);

        if (number === 2) {
            return true;
        }
        for (var i = 0; i < generatedPrimes.length; i++) {
            var primeToCheck = generatedPrimes[i];
            if (primeToCheck > sqrt) {
                return true;
            }
            if (number % primeToCheck === 0) {
                return false;
            }
        }
        return true;
    }
    while (generatedPrimes.length < count) {
        if (isPrime(currentNumberToCheck)) {
            generatedPrimes.push(currentNumberToCheck);
        }
        currentNumberToCheck += 1;
    }
    callback(null, generatedPrimes);
};

module.exports = PrimeGenerator;