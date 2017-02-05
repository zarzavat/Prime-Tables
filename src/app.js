var Display = require('./primeTableDisplay');
var PrimeGenerator = require('./primeGenerator');
var PrimeTable = require('./primeTable');
var args = process.argv;
console.log(args);
if (args.length === 3) {
    var n = args[2];
    var displayFormatter = new Display(new PrimeTable(new PrimeGenerator()));
    displayFormatter.getFormattedString(n, function (err, output) {
        console.log(output);
    });
}