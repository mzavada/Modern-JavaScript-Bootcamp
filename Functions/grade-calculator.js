const calcGrade = function (score, totalScore = 20) {
    const finalScore = score / totalScore * 100;
    let grade

    if (finalScore >= 90) {
        grade = "A"
    } else if (finalScore >= 80) {
        grade = "B"
    } else if (finalScore >= 70) {
        grade = "C"
    } else if (finalScore >= 60) {
        grade = "D"
    } else {
        grade = "F"
    }
    return `You got a ${grade} (${finalScore}%)!`
}

console.log(calcGrade(13))