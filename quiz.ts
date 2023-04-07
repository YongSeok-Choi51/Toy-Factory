
// Q1
// Check if a string contains the word word in it (case insensitive). If you have no idea, I guess you could try /word/.
const answer1 = /\bword\b/i;


// Q2
// With regex you can count the number of matches. 
// Can you make it return the number of uppercase consonants (B,C,D,F,..,X,Y,Z) in a given string? 
// E.g.: it should return 3 with the text ABcDeFO!. Note: Only ASCII. We consider Y to be a consonant!

// Example: the regex /./g will return 3 when run against the string abc.
const answer2 = /[^AEIOUa-z\W\d_]/g;
console.log(answer2.test("ADserfDVniosf123SD"));



// Q3
// Find all occurrences of 4 or more whitespace characters in a row throughout the string.
const answer3 = /[\s]{4,}/g;



// Q4
// Count the number of integers in a given string. Integers are, for example: 1, 2, 65, 2579, etc.
const answer4 = /[0-9]{1,}/g;



// Q5
// Validate an IPv4 address. 
// The addresses are four numbered separated by three dots, and can only have a maximum value of 255 in either octet.
// Start by trying to validate 172.16.254.1.

// 오답, 다시 도전해보고 모르겠다면 해결법 찾고 분석하기..
const wrongAnswer = /^[\d]{1,3}\.[\d]{1,3}\.[\d]{1,3}\.[\d]{1,3}$/;