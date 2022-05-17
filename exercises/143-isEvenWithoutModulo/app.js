function isEvenWithoutModulo(num) {
    // your code here
    let result = 0;
            if (num < 0){
                num = -1 * num;
                result = (num - (2*(Math.floor(num/2))));
                    
            } else {
                result = (num - (2*(Math.floor(num/2))));
            }

        if (result != 0){
            return false;
        } else return true;
}
var output = isEvenWithoutModulo(8);
console.log(output); // --> true