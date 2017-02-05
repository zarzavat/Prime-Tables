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

    it('should generate correct amount of entries', function (done) {
        primeGenerator.generateFirstPrimes(100, function (err, primes) {
            assert(primes.length === 100);
            done();
        })
    })

    it('should generate first 10 primes', function (done) {
        primeGenerator.generateFirstPrimes(10, function (err, primes) {
            assert(JSON.stringify(primes) === JSON.stringify([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]));
            done();
        })
    })
}) 