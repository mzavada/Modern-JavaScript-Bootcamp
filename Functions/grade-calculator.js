const calcGrade = (score, totalScore = 20) => {
  // verify that both agruments are numbers
  if (typeof score !== 'number' || typeof totalScore !== 'number') {
    throw new Error('Both agruments should be a number');
  }

  const finalScore = score / totalScore * 100;
  let grade = '';

  if (finalScore >= 90) {
    grade = 'A';
  } else if (finalScore >= 80) {
    grade = 'B';
  } else if (finalScore >= 70) {
    grade = 'C';
  } else if (finalScore >= 60) {
    grade = 'D';
  } else {
    grade = 'F';
  }
  return `You got a ${grade} (${finalScore}%)!`;
};


try {
  console.log(calcGrade(18, 25));
} catch (e) {
  console.log(e.message);
}
