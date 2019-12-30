function addOne(x) {
  return x + 1;
}
function pipe(argNumber, ...arbitraryFunctions) {
  let res = argNumber;
  for (let functionIndex of arbitraryFunctions) {
    res = functionIndex(res);
  }
  return res;
}
addOne(1);
pipe(1, addOne, addOne);
