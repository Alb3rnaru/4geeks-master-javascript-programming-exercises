function getLargestElement(arr) {
  // your code here
  let largestElement = -1000000000;
    if (arr.length == 0){
        return 0;
    } else {
        for (let number of arr){
            if (number > largestElement){
                largestElement = number;
            }
        }
    }
    return largestElement;
}
var output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;