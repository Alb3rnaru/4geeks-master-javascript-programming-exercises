function flipPairs(input){
    // your code here
    let result = "";
    console.log(input.length);
    for (let i=0; i<input.length-1; i = i+2){
        result = result + input[i+1];
        result = result + input[i];
    }
    if (input.length%2 !=0){
        result = result + input[input.length-1];
    }
    
    return result;
}

var input = 'check out how interesting this problem is, it\'s insanely interesting!';
var output = flipPairs(input);
console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!
