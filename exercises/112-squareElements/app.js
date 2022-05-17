function squareElements(arr) {
  // your code here
  let result = [];
  for (let number of arr){
    result.push(number * number);
  }
  return result;
}

var output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]