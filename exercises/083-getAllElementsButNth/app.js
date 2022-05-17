function getAllElementsButNth(array, n) {
    // Write your function here
    let result = [];
    for (let index in array){
        if (index == n){
            continue;
        } else {
            result.push(array[index])
        }
    }
    return result;
}
var output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']