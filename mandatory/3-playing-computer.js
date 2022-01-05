/*
  You have to predict the output of this program WITHOUT EXECUTING IT.

  In order to do this, try writing down the value that all variables take
  during each step of the program execution.

  Answer the following questions:

  1. This program throws an error. Why? (If you can't find it, try executing it).
  consol.log(b); throws error because we don't have b variable
  2. Remove the line that throws the error.
  3. What is printed to the console?
    2, 6, 4, 9, 6, 13, 8.
  4. How many times is "f1" called?
    Two Times printed  to the console 9 and 13.
  5. How many times is "f2" called?
    Three times printed to the console 4, 6, 8.
  6. What value does the "a" parameter take in the first "f1" call?
    i = 1 and  go to the parameter a = 1.
  7. What is the value of the "a" outer variable when "f1" is called for the first time?
      a = 7 + 1 = 8.
*/

let x = 2;
let a = 6;

const f1 = function (a, b) {
  return a + b;
};

const f2 = function (a, b) {
  return a + b + x;
};

console.log(x);
console.log(a);
for (let i = 0; i < 5; ++i) {
  a = a + 1;
  if (i % 2 === 0) {
    const d = f2(i, x);
    console.log(d);
  } else {
    const e = f1(i, a);
    console.log(e);
  }
}
