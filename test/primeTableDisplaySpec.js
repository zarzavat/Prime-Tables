var assert = require('assert');
var primeGenerator = new (require('../src/primeGenerator'))();
var primeTable = new (require('../src/primeTable'))(primeGenerator);
var primeTableDisplay = new (require('../src/primeTableDisplay'))(primeTable);

describe('table output', function () {
    it('should generate correct output for 3x3 matrix', function (done) {
        primeTableDisplay.getFormattedString(3, function (err, output) {
            assert.equal(output, `    2  3  5
 2  4  6 10
 3  6  9 15
 5 10 15 25
`);
            done();
        })
    })
}) 