// Write your function here

function computeAverageOfNumbers(array){
    let average = 0;
    if (array.length == 0){
        return 0;
    } else {
        for (let item of array){
            average = average + parseInt(item);
        }      
    }
    average = average / array.length;
    return average;
}

var input = [1,2,3,4,5];
var output = computeAverageOfNumbers(input);
console.log(output);