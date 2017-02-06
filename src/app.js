var Display = require('./primeTableDisplay');
var PrimeGenerator = require('./primeGenerator');
var PrimeTableCalculator = require('./primeTableCalculator');
var args = process.argv;
if (args.length <= 3) {
    var n = args[2] || 3;
    var displayFormatter = new Display(new PrimeTableCalculator(new PrimeGenerator()));
    console.log(`using n=${n}`);
    displayFormatter.getFormattedString(n, function (err, output) {
        if (err) {
            console.log(err.message);
            return 1;
        }
        console.log(output);
    });
} else {
    console.log('unknown options');
}