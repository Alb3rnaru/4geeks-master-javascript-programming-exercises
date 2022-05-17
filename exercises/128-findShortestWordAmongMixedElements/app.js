function findShortestWordAmongMixedElements(arr) {
    // your code here
    let result = "";
    let index = 0;
    if (arr.length == 0){
        return "";
    } else {
        for (let i=0; i<arr.length; i++) {
            index = index + 1;
            if (typeof(arr[i]) == "string"){
                    result = arr[i];
                    break;
            }
        }
        for (index; index<arr.length; index++){
            if (typeof(arr[index]) == "string" && arr[index].length < result.length){
                    result = arr[index];
            }
        }       
    }
    return result;
}
var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'

var output = findShortestWordAmongMixedElements([]);
console.log(output);