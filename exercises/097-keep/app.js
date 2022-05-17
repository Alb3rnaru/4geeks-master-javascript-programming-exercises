// Write your function here

function keep(array, discarder){
    let result = [];
    for (let index in array){
        if (array[index] != discarder){
            continue;
        } else {
            result.push(array[index]);
        }
    }
    return result;
}

var output = keep([1, 2, 3, 2, 1], 3);
console.log(output); 