function filterOddElements(arr) {
  // your code here
  let result = [];
  for (let number of arr){
    if (number%2 != 0){
      result.push(number);
    }
  }
  return result;
}

var output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5]