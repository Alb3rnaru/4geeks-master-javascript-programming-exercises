function getLengthOfShortestElement(arr) {
    // your code here
    let shortestWordLength = 1000000000;
    if (arr.length == 0){
        return 0;
    } else {
        for (let word of arr){
         if (word.length < shortestWordLength){
            shortestWordLength = word.length;
        }
        }
    }   
    return shortestWordLength;
}
var output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3