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