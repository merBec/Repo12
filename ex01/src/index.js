var myArr = [1, 2, 3, 4];

function myRecursion(arr, n) {
  if (n <= 0) {
    return 0;
  } else {
    return myRecursion(arr, n - 1) + arr[n - 1];
  }
}

console.log(myRecursion(myArr, 3));
module.exports = myRecursion;
