/*
FixStart

Create a function called fixStart.
It should take a single argument, a string, and return a version where all
occurences of its first character have been replaced with '*',
except for the first character itself. You can assume that the string is at least one character long.

For example:

fixStart('babble'): 'ba**le'
*/

function fixStart(s) {
  // write your solution here...
  var letter = s[0];
  var string = s[0];
  for (var i = 1; i < s.length; i++) {
    if(s[i] === letter)
    {
      string += '*';
    }
    else {
      string += s[i];
    }
  }
  return string;
}
console.log(fixStart('babble'));
