function multiply(num1, num2) {
    // your code here
    let result = 0;
    let num1Positive = 0;
    let num2Positive = 0;

    if (num1 < 0 && num2 > 0){
        num1Positive = num1.toString();
        num1Positive = num1Positive[1];
        num1Positive = parseInt(num1Positive);
        result = helpMultiply(num1Positive, num2);
        result = result.toString();
        result = "-" + result;
        return parseInt(result);

        }else if (num1 > 0 && num2 < 0){
            num2Positive = num2.toString();
            num2Positive = num2Positive[1];
            num2Positive = parseInt(num2Positive);
            result = helpMultiply(num1, num2Positive);
            result = result.toString();
            result = "-" + result;
            return parseInt(result);

            } else if (num1 > 0 && num2 > 0){
                result = helpMultiply(num1, num2);
                return result;

                } else if (num1 < 0 && num2 < 0){
                    num1Positive = num1.toString();
                    num1Positive = num1Positive[1];
                    num1Positive = parseInt(num1Positive);
                    num2Positive = num2.toString();
                    num2Positive = num2Positive[1];
                    num2Positive = parseInt(num2Positive);
                    result = helpMultiply(num1Positive, num2Positive);
                    return result;
                }
    return "Put some numbers my man";
}

function helpMultiply(num1, num2){
    let result = num1;
    for (let i=1; i<num2; i++){
        result = result + num1;
    }
    return result;
}
var output = multiply(4, 7);
console.log(output); // --> 28

var output = multiply(4, -7);
console.log(output);

var output = multiply(-4, 7);
console.log(output);

var output = multiply(-4, -7);
console.log(output);