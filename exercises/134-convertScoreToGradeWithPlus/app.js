function convertScoreToGradeWithPlusAndMinus(score) {
    // your code here
    if (score > 100 || score < 0) {
        return 'INVALID SCORE';
    } else {
        if (score <= 100 && score >= 93){
            return 'A+';
            } else if (score <=92  && score >= 90){
                return 'A-'
                } else if (score <=89  && score >= 83){
                    return 'B+'
                    } else if (score <=82  && score >= 80){
                        return 'B-'
                        } else if (score <=79  && score >= 73){
                            return 'C+'
                            }else if (score <=72  && score >= 70){
                                return 'C-'
                                } else if (score <=69  && score >= 63){
                                    return 'D+'
                                    }else if (score <=62  && score >= 60){
                                        return 'D-'
                                        }else if (score <=59){
                                            return 'F'
                                        }
    }
}

var output = convertScoreToGradeWithPlusAndMinus(82);
console.log(output); // --> 'A-'