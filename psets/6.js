/*

MixUp

Create a function called mixUp. It should take in two strings,
and return the concatenation of the two strings (separated by a space) slicing out
and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long.

For example:
  mixUp('mix', pod'): 'pox mid'
  mixUp('dog', 'dinner'): 'dig donner'
Look up the JavaScript string reference to find methods which may be useful!
*/

function mixUp(word_a, word_b) {
  // write your solution here...
var first_two = word_a.substring(0,2);
var first_rest= word_a.substring(2, word_a.length);
var second_two = word_b.substring(0,2);
var second_rest = word_b.substring(2, word_b.length);
var word2= second_two+first_rest;
var word1 = first_two+second_rest;
var final = word1 +" "+ word2;
return final;

}
var word_a = prompt("Please provide a word");
var word_b = prompt("please provide another word");
var mix = mixUp(word_a, word_b);
console.log(mix)
