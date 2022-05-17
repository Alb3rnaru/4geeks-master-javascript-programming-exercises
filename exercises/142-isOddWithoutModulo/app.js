function isOddWithoutModulo(num) {

        let result = 0;
            if (num < 0){
                num = -1 * num;
                result = (num - (2*(Math.floor(num/2))));
                    
            } else {
                result = (num - (2*(Math.floor(num/2))));
            }

        if (result != 0){
            return true;
        } else return false;

}
var output = isOddWithoutModulo(17);
console.log(output); // --> true