function getMin() {
  let min = arguments[0];
  let max = min;
  for (let i = 1; i < arguments.length; ++i) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
    if (arguments[i] < min) {
      min = arguments[i];
    }
  }
  return min;
}

getMin(-110, 102, -103, 104, 106);
