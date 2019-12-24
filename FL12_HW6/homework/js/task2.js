
let a = prompt('a');
let b = prompt('b');
let c = prompt('c');
let isValid = true;

if (
  a === '' ||
  b === '' ||
  c === '' ||
  a === undefined ||
  b === undefined ||
  c === undefined
) {
  alert('input values should be ONLY numbers');
}

a = parseInt(a);
b = parseInt(b);
c = parseInt(c);

if (isNaN(a) || isNaN(b) || isNaN(c)) {
  alert('input values should be ONLY numbers');
  isValid = false;
}

if (a <= 0 || b <= 0 || c <= 0) {
  alert('A triangle must have 3 sides with a positive definite length');
  isValid = false;
}

if (a + b <= c || a + c <= b || b + c <= a) {
  alert('Triangle doesn’t exist');
  isValid = false;
}

if (isValid && (a === b && a === c && b === c)) {
  alert('Equilateral triangle');
}

if (isValid && (b === c || a === b || c === a)) {
  alert('Isosceles triangle');
}

if (isValid && (a !== b && a !== c && b !== c)) {
  alert('Scalene triangle');
}
