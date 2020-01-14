const actors = [
  { name: 'tommy', age: 36 },
  { name: 'lee', age: 28 }
];

const TWO = 2;
const THREE = 3;
const TEN = 10;
const TWO_THOUSAND_NINETEEN = 2019;
const date = new Date(TWO_THOUSAND_NINETEEN, 0, TWO);
const MIN_NUMBER_FOR_SUBSTITUTE = 30;
const MLSC_IN_DAY = 86400000;

//1ша функція
function convert(...argument) {
  let res = new Array();
  for (let value of argument) {
    if (typeof value === 'string') {
      value = parseInt(value);
    } else {
      value = value.toString();
    }
    res.push(value);
  }
  return res;
}

//console.log(convert('5', 2, '3', '10'));

//2га функція
function executeforEach(array, functionOverArray) {
  for (let value of array) {
    functionOverArray(value);
  }
}

// executeforEach([1, 2, 3], function(el) {
//   console.log(el * 2);
// });

//3тя функція
function mapArray(array, functionOverArray) {
  let res = new Array();

  executeforEach(array, function(value) {
    res.push(functionOverArray(parseInt(value)));
  });

  return res;
}
// console.log(
//   mapArray([2, '5', 8], function(el) {
//     return el + 3;
//   })
// );

//4тя функція
function filterArray(array, functionOverArray) {
  let res = new Array();

  executeforEach(array, function(value) {
    if (functionOverArray(value)) {
      res.push(value);
    }
  });

  return res;
}

// console.log(
//   filterArray([2, 5, 8], function(el) {
//     return el % 2 === 0;
//   })
// );
//5тя функція
function flipOver(str) {
  let reversedString = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  return reversedString;
}
// console.log(flipOver('hey world'));

//6тя функція
function makeListFromRange(array) {
  let res = new Array();
  for (let i = array[0]; i <= array[1]; i++) {
    res.push(i);
  }
  return res;
}
// console.log(makeListFromRange([1, 8]));

//7тя функція
function getArrayOfKeys(array, key) {
  let res = new Array();
  executeforEach(array, value => res.push(value[key]));
  return res;
}
// console.log(getArrayOfKeys(actors, 'name'));

//8 функція
function substitute(array) {
  return mapArray(array, value =>
    value < MIN_NUMBER_FOR_SUBSTITUTE ? '*' : value
  );
}

// console.log(substitute([58, 14, 48, 2, 31, 29]));

//9 функція
function getPastDay(date, days) {
  return new Date(date.getTime() - days * MLSC_IN_DAY).getDate();
}

// console.log(getPastDay(date, 365));

//10 функція

function formatDate(date) {
  let hours;
  let minutes;
  if (date.getHours() < TEN) {
    hours = '0' + date.getHours();
  } else {
    hours = date.getHours();
  }

  if (date.getMinutes() < TEN) {
    minutes = '0' + date.getMinutes();
  } else {
    minutes = date.getMinutes();
  }

  return (
    date.getFullYear() +
    '/' +
    (date.getMonth() + 1) +
    '/' +
    date.getDate() +
    ' ' +
    hours +
    ':' +
    minutes
  );
}

// console.log(formatDate(new Date()));
