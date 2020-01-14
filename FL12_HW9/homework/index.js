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

function executeforEach(array, functionOverArray) {
  for (let value of array) {
    functionOverArray(value);
  }
}

function mapArray(array, functionOverArray) {
  let res = new Array();

  executeforEach(array, function(value) {
    res.push(functionOverArray(parseInt(value)));
  });
  return res;
}

function filterArray(array, functionOverArray) {
  let res = new Array();
  executeforEach(array, function(value) {
    if (functionOverArray(value)) {
      res.push(value);
    }
  });
  return res;
}

function flipOver(str) {
  let reversedString = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  return reversedString;
}

function makeListFromRange(array) {
  let res = new Array();
  for (let i = array[0]; i <= array[1]; i++) {
    res.push(i);
  }
  return res;
}

function getArrayOfKeys(array, key) {
  let res = new Array();
  executeforEach(array, value => res.push(value[key]));
  return res;
}

function substitute(array) {
  return mapArray(array, value =>
    value < MIN_NUMBER_FOR_SUBSTITUTE ? '*' : value
  );
}

function getPastDay(date, days) {
  return new Date(date.getTime() - days * MLSC_IN_DAY).getDate();
}

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
