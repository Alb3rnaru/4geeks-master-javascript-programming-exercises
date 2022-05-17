// Write your function here

function findMinLengthOfThreeWords(word1, word2, word3){
    if (word1.length < word2.length && word1.length < word3.length){
        return word1.length;
    }
    if (word2.length < word1.length && word2.length < word3.length){
        return word2.length;
    }
    if (word3.length < word2.length && word3.length < word2.length){
        return word3.length;
    }
}

var output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output);