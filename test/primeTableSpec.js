var assert = require('assert');
var primeGenerator = new (require('../src/primeGenerator'))();
var primeTable = new (require('../src/primeTable'))(primeGenerator);
var firstTenPrimes = [2, 3, 5, 7, 11, 13, 17, 23, 27, 31];

describe('table output', function () {
    it('should generate correct 2x2 matrix', function (done) {
        primeTable.generateMatrix(1, function (err, matrix) {
            assert(matrix[0][0] === null);
            assert(matrix[0][1] === 2);
            assert(matrix[1][0] === 2);
            assert(matrix[1][1] === 4);
            done();
        })
    })

    it('should have squared primes on the main diagonal', function (done) {
        primeTable.generateMatrix(10, function (err, matrix) {
            assert(matrix[0][0] === null);
            assert(matrix[1][1] === 2 * 2);
            assert(matrix[5][5] === 11 * 11);
            done();
        })
    })

    it('should have primes[x] * primes[y] on matrix[x+1][y+1]', function (done) {
        primeTable.generateMatrix(10, function (err, matrix) {
            assert(matrix[3][6] === firstTenPrimes[2] * firstTenPrimes[5]);
            assert(matrix[6][3] === firstTenPrimes[5] * firstTenPrimes[2]);
            done();
        })
    })


}) 