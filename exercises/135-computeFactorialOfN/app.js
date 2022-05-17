function computeFactorialOfN(n) {
    if (n == 0) {
        return 1;
    } else {
        return n * computeFactorialOfN(n-1);
    }
}

var output = computeFactorialOfN(3); console.log(output); // --> 6

var output = computeFactorialOfN(4); console.log(output); // --> 24