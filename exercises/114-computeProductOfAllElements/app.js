function computeProductOfAllElements(arr) {
    // your code here
    let result = 1;
    console.log(arr === []);
    if(arr.length == 0){
        return 0;
    } else {
        for (let number of arr){
         result *= number;
        }
        return result;
    }
    
}

var output = computeProductOfAllElements([]);
console.log(output); // --> 60