function getAllLetters(str) {
    // your code here
    let arrayOfLetters = [];
    if (str.length == 0) return arrayOfLetters;
    for (let i=0; i<str.length; i++) {
        arrayOfLetters.push(str[i])
    }
    return arrayOfLetters;
}