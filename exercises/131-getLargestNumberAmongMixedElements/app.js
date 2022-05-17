function getLargestNumberAmongMixedElements(arr) {
    // your code here
    let result = -100000000;
    let index = 0;
    if (arr.length == 0){
        return 0;
    } else {
        for (let i=0; i<arr.length; i++) {
            index = index + 1;
            if (typeof(arr[i]) == "number"){
                    result = arr[i];
                    break;
            } else if (index == (arr.length-1)){
              return 0;
            }
        }
        for (index; index<arr.length; index++){
            if (typeof(arr[index]) == "number" && arr[index] > result){
                    result = arr[index];
            }
        }       
    }
    return result;
}

var output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5