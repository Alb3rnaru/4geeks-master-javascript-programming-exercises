function countCharacter(str, char) {
    // your code here
    let ocurrences = 0;
    for (let i=0; i<str.length; i++){
        if (str[i] == char){
            ocurrences++;
        }
    }
    return ocurrences;
}