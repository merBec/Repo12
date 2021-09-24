function isOdd(n) {
  return Boolean(n % 2);
}

function generateFibonnaci(maxNum) {
  if (maxNum === 0) {
    return [0];
  }
  if (maxNum < 0 || !Boolean(maxNum)) {
    return [];
  }
  if (maxNum === 1) {
    return [0, 1];
  }
  var arrayFib = [0, 1, 1];
  var i = 2;
  while (arrayFib[i] < maxNum) {
    var nextNum = arrayFib[i] + arrayFib[i - 1];
    if (nextNum <= maxNum) {
      arrayFib.push(nextNum);
    }
    i++;
  }

  return arrayFib;
}

function sumFibonacci(num) {
  var arrayFib = generateFibonnaci(num);
  var sum = 0;
  for (var i = 0; arrayFib[i] <= num; i++) {
    if (isOdd(arrayFib[i])) {
      sum += arrayFib[i];
    }
  }
  return sum;
}

console.log(sumFibonacci(20));
module.exports = sumFibonacci;
