function countNumbers(str) {
  let bigNumber = '';
  let arr = [];
  let result = {};
  for (let i = 0; i < str.length; i++) {
    if (Number.isInteger(parseInt(str[i]))) {
      bigNumber = bigNumber + str[i];
    }
  }
  for (let i = 0; i < bigNumber.length; i++) {
    bigNumber[i] = parseInt(bigNumber[i]);
    arr[i] = bigNumber[i];
  }
  arr.sort();
  for (let i = 0; i < arr.length; ++i) {
    let a = arr[i];
    if (result[a] != undefined) {
      ++result[a];
    } else {
      result[a] = 1;
    }
  }
  return result;
}

countNumbers('t1a9r4i5kt1a9r4i5kt1a9r4i5k');
