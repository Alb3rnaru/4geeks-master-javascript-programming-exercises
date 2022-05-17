// Write your function here

function countAllCharacters(string){
    let result = {};
    for (let index in string){
        if (result[string[index]] == null){
            result[string[index]] = 1;
        } else {
            result[string[index]] = result[string[index]] + 1;
        }
    }
    return result;
}

var output = countAllCharacters('banana');
console.log(output);