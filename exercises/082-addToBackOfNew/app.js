function addToBackOfNew(arr, element) {
    // Write your function here
    let result = [];
    for (let item of arr){
        result.push(item);
    }
    result.push(element);
    return result;
}

var input = [1, 2];
var output = addToBackOfNew(input, 3);
console.log(input); // --> [1, 2]
console.log(output); // --> [1, 2, 3]