var Display = require('./primeTableDisplay');
var PrimeGenerator = require('./primeGenerator');
var PrimeTableCalculator = require('./primeTableCalculator');
var args = process.argv;
if (args.length === 3) {
    var n = args[2];
    var displayFormatter = new Display(new PrimeTableCalculator(new PrimeGenerator()));
    displayFormatter.getFormattedString(n, function (err, output) {
        if (err) {
            console.log(err.message);
            return 1;
        }
        console.log(output);
    });
}