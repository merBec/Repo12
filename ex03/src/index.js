function rangeOfNumbers(startN, endN) {
  if (startN > endN) {
    return new Error("The starting number will always be less than or equal to the ending number").message;
  }

  if (startN === endN) {
    return [startN];
  }

  var rangeArr = rangeOfNumbers(startN, endN - 1);
  rangeArr.push(endN);

  return rangeArr;
}

console.log(rangeOfNumbers(1, 7));
module.exports = rangeOfNumbers;
