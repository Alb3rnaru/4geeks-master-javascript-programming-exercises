function findShortestElement(arr) {
    // your code here
    let shortestWordLength = 100000000000;
    let shortestWord = "";
    for (let word of arr){
        if (word.length < shortestWordLength){
            shortestWordLength = word.length;
            shortestWord = word;
        }
    }
    return shortestWord;
}
var output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'