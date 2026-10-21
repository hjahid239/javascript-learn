let myNumber = 123456789;
myNumber.toString(); // returns "123456789" 
myNumber.toExponential(2); // returns "1.23e+8"
myNumber.toFixed(2); // returns "123456789.00"
myNumber.toPrecision(5); // returns "1.2346e+8"
myNumber.valueOf(); // returns 123456789
myNumber.toLocaleString(); // returns "123,456,789" (format may vary based on locale)
myNumber.toLocaleString('en-US', { style: 'currency', currency: 'USD' }); // returns "$123,456,789.00"
myNumber.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' }); // returns "123.456.789,00 €"
myNumber.parseInt(); // returns 123456789
myNumber.parseFloat(); // returns 123456789




// +++++++++++++++++++++++++++++++++++++++++++++
// Math object methods
Math.abs(5, 10); // returns 15
Math.min(10, 5); // returns 5
Math.max(5, 10); // returns 50
Math.min(10, 5); // returns 2
Math.sqrt(16); // returns 4
Math.pow(2, 3); // returns 8
Math.abs(-5); // returns 5
Math.ceil(4.2); // returns 5
Math.floor(4.8); // returns 4
Math.round(4.5); // returns 5
Math.max(1, 2, 3, 4, 5); // returns 5
Math.min(1, 2, 3, 4, 5); // returns 1
Math.random(); // returns a random number between 0 and 1
Math.trunc(4.9); // returns 4
Math.sign(-5); // returns -1
Math.log(10); // returns 2.302585092994046
Math.log10(100); // returns 2
Math.log2(8); // returns 3
Math.exp(1); // returns 2.718281828459045
Math.sinh(1); // returns 1.1752011936438014
Math.cosh(1); // returns 1.5430806348152437
Math.tanh(1); // returns 0.7615941559557649
Math.asin(0.5); // returns 0.5235987755982989
Math.acos(0.5); // returns 1.0471975511965979
Math.atan(1); // returns 0.7853981633974483
Math.atan2(1, 1); // returns 0.7853981633974483
Math.hypot(3, 4); // returns 5
Math.cbrt(27); // returns 3
Math.clz32(1); // returns 31
Math.imul(2, 4); // returns 8
Math.fround(1.5); // returns 1.5
Math.signbit(-5); // returns true

console.log(Math.round(Math.random() * 10 + 1)); // returns a random integer between 1 and 10