function isEitherEvenAndLessThan9(num1, num2) {
    // your code here

    if ((((num1 + num2)%2 != 0) && (num1 < 9) && (num2 < 9)) || (((num1 + num2)%2 == 0) && (num1 < 9) && (num2 < 9))){
        console.log(1);
        return true;
    } else if (num1 === num2 === 0) {
        return true;
    } else return false;
}