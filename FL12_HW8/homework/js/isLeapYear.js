function isLeapYear(strYear) {
  let result;
  let currentYear = new Date(strYear).getFullYear();
  let February29 = new Date(currentYear, 1, 29).getDate();
  if (February29 === 29) {
    result = currentYear + ' is a leap year';
  }
  if (February29 !== 29) {
    result = currentYear + ' is not a leap year';
  }
  if (isNaN(currentYear)) {
    result = 'Invalid Date';
  }
  return result;
}

isLeapYear('2020-01-01 00:00:00');
