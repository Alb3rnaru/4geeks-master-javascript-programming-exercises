function getStringLength(string) {
    // your code here
    let index = 0;
    while (string[index] != null){
        index++;
    }
    return index;
}

var output = getStringLength('hello');
console.log(output); // --> 5