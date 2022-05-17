function computeSumOfAllElements(arr) {
  // your code here
  let result = 0;
  for(let number of arr){
    result += number;
  }
  return result;
}

var output = computeSumOfAllElements([1, 2, 3])
console.log(output); // --> 6