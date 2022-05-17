
function filterEvenElements(arr) {
    // your code here
    let result = [];
    for (let number of arr){
        if (number%2 == 0){
          result.push(number);
        }
    }
  return result;
}

var output = filterEvenElements([2, 3, 4, 5, 6]);
console.log(output); // --> [2, 4, 6]
