function modulo(num1, num2) {
    if (num1 == 0 && num2 != 0){
        console.log("here1");
        return 0;
        } else if (num2 == 0 || num1 === NaN || num2 === NaN){
            console.log("here");
            return NaN;
            } else {
                if (num1 < 0){
                num2 = -1 * num2;
                let result = (num1 - (num2*(Math.floor(num1/num2))));
                return result;
                } else {
                let result = (num1 - (num2*(Math.floor(num1/num2))));
                return result;
                }
            }
}

var output = modulo(-25, 4);
console.log(output); // --> 1