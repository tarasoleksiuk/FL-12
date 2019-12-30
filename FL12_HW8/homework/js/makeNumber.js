function makeNumber(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (Number.isInteger(parseInt(str[i]))) {
      result = result + str[i];
    }
  }
  return result;
}
makeNumber('t1a9r4i5k');
