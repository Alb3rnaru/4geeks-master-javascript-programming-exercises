function joinArrayOfArrays(arr) {
  // your code here
  let result = [];
  for (let array of arr){
    result = result.concat(array);
  }
  return result;
}
var output = joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]);
console.log(output); // --> [1, 4, true, false, 'x', 'y']