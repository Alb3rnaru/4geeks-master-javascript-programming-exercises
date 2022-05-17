function findPairForSum(array, number){
    let result = [];
    result[0] = array[0]
    if (array.length == 0){
        return "not found";
    } else {
        for (let i=1; i<array.length; i++){
            let compare = result[0] + array[i];
            if (compare == number){
                result.push(array[i]);
                return result;
            }
        }
        array.shift();
        result = [];
        return findPairForSum(array, number);
    }
}

var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]
