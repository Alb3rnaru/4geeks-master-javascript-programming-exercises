function getLengthOfLongestElement(arr) {
    // your code here
    let longestWordLength = 0;
    for (let word of arr){
        if (word.length > longestWordLength){
            longestWordLength = word.length;
        }
    }
    return longestWordLength;
}

var output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5