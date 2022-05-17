function getLongestElement(arr) {
    // your code here
    let longestWordLength = 0;
    let longestWord = "";
    for (let word of arr){
        if (word.length > longestWordLength){
            longestWordLength = word.length;
            longestWord = word;
        }
    }
    return longestWord;
}
var output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'