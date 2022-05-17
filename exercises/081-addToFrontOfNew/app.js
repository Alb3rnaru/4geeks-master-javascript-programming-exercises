
function addToFrontOfNew(arr, element) {
    // Write your function here
    let result = [element];
    for (let item of arr){
        result.push(item);
    }
    return result;
}

var input = [1, 2];
var output = addToFrontOfNew(input, 3);
console.log(output); // --> [3, 1, 2];
console.log(input); // --> [1, 2]