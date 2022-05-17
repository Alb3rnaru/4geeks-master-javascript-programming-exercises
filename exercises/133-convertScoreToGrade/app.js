function convertScoreToGrade(score) {
    // your code here
    if (score > 100 || score < 0){
        return 'INVALID SCORE';
    } else {
        let scoreRounded = Math.floor(score/10);
        switch (scoreRounded) {
            case 10: return 'A';
            case 9: return 'A';
            case 8: return 'B';
            case 7: return 'C';
            case 6: return 'D';
            case 5: return 'F';
            case 4: return 'F';
            case 3: return 'F';
            case 2: return 'F';
            case 1: return 'F';
            case 0: return 'F';
            default: return 'INVALID SCORE';
        }          
    }
    
}

var output = convertScoreToGrade(91);
console.log(output); // --> 'A'