function flipEveryNChars(input, n) {
    // your code here
    let result = '';
    console.log(result);
    // console.log(input.length);
    for (let i=0; i<input.length-1; i = i+n){
        for (let j=i+n-1; j>=i; j--){
            if (input[j] == undefined){
                continue;
            }
            result = result + input[j];
        }
    }
    // if (input.length%2 !=0){
    //     result = result + input[input.length-1];
    // }
    
    return result;
}

var input = 'a short example';
var output = flipEveryNChars(input, 5);
console.log(output); // --> ohs axe trelpma

input = 'watch my backflip';
output = flipEveryNChars(input, 3);
console.log(output);