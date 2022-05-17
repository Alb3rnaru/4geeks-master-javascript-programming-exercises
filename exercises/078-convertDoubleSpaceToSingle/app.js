function convertDoubleSpaceToSingle(str) {
    // your code here
    let arrayOfWords = [""];
    let indexOfArrayOfWords = 0;
    for (let letter=0; letter < str.length; letter++){
        if (str[letter] != " ") {
            //console.log(str[letter]);
            arrayOfWords[indexOfArrayOfWords] = arrayOfWords[indexOfArrayOfWords] + str[letter];
            //console.log(arrayOfWords[indexOfArrayOfWords]);

        } else if (str[letter] == " " && str[letter+1] != " "){
            indexOfArrayOfWords ++;
            arrayOfWords[indexOfArrayOfWords] = "";

        } else if (str[letter] == " "){
            continue;
        }
    }
    return arrayOfWords.join(" ");
}
var output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"