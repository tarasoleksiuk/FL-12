let a = prompt('a');
let b = prompt('b');
let c = prompt('c');
let x1, x2;

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
}

a = parseFloat(a);
b = parseFloat(b);
c = parseFloat(c);

if (isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log('Invalid input data');
}
let d = Math.pow(b, 2) - 4 * a * c;
if (d > 0) {
    x1 = (-1 * b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
    x2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);

    console.log('x1 = ' + x1 + ' and x2 = ' + x2);
}
if (d === 0) {
    x1 = -b / (2 * a);
    console.log('x = ' + x1);
}
if (d < 0) {
    console.log('no solution (when Discriminant < 0)');
}
