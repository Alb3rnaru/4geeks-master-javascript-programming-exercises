function getAllWords(str) {
    // your code here
    let arrayOfWords = [];
    let word = "";
    if (str.length == 0) return arrayOfWords;
    for (let i=0; i<str.length; i++){
        if (str[i] != " "){
            word = word + str[i];
        } else {
            arrayOfWords.push(word);
            word = "";
        }
    }
    arrayOfWords.push(word);
    return arrayOfWords;
}
