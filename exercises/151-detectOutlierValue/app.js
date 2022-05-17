function detectOutlierValue(string) {
    // your code here
    // let isItOdd = false;
    // let isItEven = false;
    let result = 0;
    let numberAsString = '';
    let arrayHelp = [];
    for (let i=0; i<string.length; i++){
        if (string[i] != " "){
            numberAsString = numberAsString + string[i];
        }
        if (string[i+1] == " " || string[i+1]==null){
            arrayHelp.push(parseInt(numberAsString));
            numberAsString = "";
        }
    }
    let help1 = arrayHelp[0];
    let help2 = arrayHelp[1];
    let help3 = arrayHelp[2];

    if (isItEven(help1) && isItEven(help2)){
        return helpGettingOutlier(arrayHelp, 0);
        } else if (isItOdd(help1) && isItOdd(help2)){
            return helpGettingOutlier(arrayHelp, 1);
            } else if(isItEven(help1) && isItEven(help3)){
                return helpGettingOutlier(arrayHelp, 0);
                }else if (isItOdd(help1) && isItOdd(help3)){
                    return helpGettingOutlier(arrayHelp, 1);
                    } else if(isItEven(help2) && isItEven(help3)){
                        return helpGettingOutlier(arrayHelp, 0);
                        }else if (isItOdd(help2) && isItOdd(help3)){
                            return helpGettingOutlier(arrayHelp, 1);
                            }
    return arrayHelp;
}

function isItEven(num){
    if (num%2 == 0){
        return true;
    }
}

function isItOdd(num){
    if (num%2 != 0){
        return true;
    }
}

function helpGettingOutlier(array, EvenOrOdd){ //Even 0 and Odd is 1
    if (EvenOrOdd == 0){
        for (let i=0; i<array.length; i++){
            if(isItOdd(array[i])){
                return (i+1);
            }
        }
    } else {
        for (let i=0; i<array.length; i++){
            if(isItEven(array[i])){
                return (i+1);
            }
        }
    }
    
}

// Third number is odd, while the rest of the numbers are even
console.log(detectOutlierValue("2 4 7 8 10")); // => 3 

// Second number is even, while the rest of the numbers are odd
console.log(detectOutlierValue("1 10 1 1"))  //=> 2