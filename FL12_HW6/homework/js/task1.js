let a = prompt('a');
let b = prompt('b');
let c = prompt('c');
let x1, x2;

let isValid = true;

let two = 2;
let four = 4;
let minus1 = -1;


if (
    a === '' ||
    b === '' ||
    c === '' ||
    a === undefined ||
    b === undefined ||
    c === undefined ||
    a === 0
) {
    console.log('Invalid input data');
    isValid = false;
}

a = parseFloat(a);
b = parseFloat(b);
c = parseFloat(c);

if (isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log('Invalid input data');
    isValid = false;
}
let d = Math.pow(b, two) - four * a * c;
if (isValid && d > 0) {
    x1 = (minus1 * b + Math.sqrt(Math.pow(b, two) - four * a * c)) / (two * a);
    x2 = (minus1 * b - Math.sqrt(Math.pow(b, two) - four * a * c)) / (two * a);

    console.log('x1 = ' + x1 + ' and x2 = ' + x2);
}
if (isValid && d === 0) {
    x1 = -b / (two * a);
    console.log('x = ' + x1);
}
if (isValid && d < 0) {
    console.log('no solution');
}
