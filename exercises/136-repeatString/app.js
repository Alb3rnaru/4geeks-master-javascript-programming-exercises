function repeatString(string, num) {
    // your code here
    let result = '';
    // if (num > 0) {
    //     console.log(result);
    //     result = '' + string + repeatString(string, (num-1));
    //     console.log(result);
    //     return result;
    // }
    for (let i=0; i<num; i++){
        result = result + string;
    }
    return result;
}

var output = repeatString('code', 3);
console.log(output); // --> 'codecodecode'