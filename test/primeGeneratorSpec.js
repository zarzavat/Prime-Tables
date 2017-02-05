var assert = require('assert');
var primeGenerator = new (require('../src/primeGenerator'))();

describe('prime generation', function () {
    it('should generate 2 as first prime', function (done) {
        primeGenerator.generateFirstPrimes(1, function (err, primes) {
            assert(primes.length === 1);
            assert(primes[0] === 2);
            done();
        })
    })
}) 