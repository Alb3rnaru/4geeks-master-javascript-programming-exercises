function filterOddLengthWords(words) {
    // your code here
    let result = [];
    if (words == [] || !(Array.isArray(words))){
        return [];
    } else {
        for (let word of words) {
            if (word.length%2 != 0){
                result.push(word);
            }
        }
    }
    return result;
}

var output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', "now']
