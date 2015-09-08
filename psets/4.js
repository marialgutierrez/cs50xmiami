/*
The Temperature Converter

It's hot out! Let's make a converter based on the steps here:
http://www.mathsisfun.com/temperature-conversion.html

- Store a celsius temperature into a variable.
- Convert it to fahrenheit and output "NN°C is NN°F".
- Now store a fahrenheit temperature into a variable.
- Convert it to celsius and output "NN°F is NN°C."
*/

// write your solution here...
var temp_c = 25;
var temp_f = 71;
var fahrenheit = (temp_c*9/5) +32;
var celsius = (temp_f - 32)*5/9;

console.log(temp_c + " degree C is " + fahrenheit + " degree F");
console.log(temp_f + " degree F is " + celsius + " degree C");
