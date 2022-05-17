function findSmallestElement(arr) {
    // your code here
    let smallestElement = 1000000000;
    if (arr.length == 0){
        return 0;
    } else {
        for (let number of arr){
            if (number < smallestElement){
                smallestElement = number;
            }
        }
    }
    return smallestElement;
}
var output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1