// Write your function here

function getIndexOf(letter, string){
    for (let index in string){
        if (string[index] == letter){
            return parseInt(index);
        }
    }
    return -1;
}

var output = getIndexOf('a', 'I am a hacker');
console.log(output);