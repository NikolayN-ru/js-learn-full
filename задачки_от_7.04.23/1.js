function calculateScores(tasks) {
  const numTasks = tasks[0].length;
  const scores = new Array(tasks.length).fill(0);

  for (let i = 0; i < numTasks; i++) {
    let numSolved = 0;
    for (let j = 0; j < tasks.length; j++) {
      if (tasks[j][i] === 1) {
        numSolved++;
      }
    }
    const numNotSolved = tasks.length - numSolved;
    const taskScore = numNotSolved + 1;
    for (let j = 0; j < tasks.length; j++) {
      if (tasks[j][i] === 1) {
        scores[j] += taskScore;
      }
    }
  }

  return scores;
}

const tasks = [
  [0, 0, 1, 0],
  [1, 1, 0, 1],
  [0, 1, 0, 1],
];
const scores = calculateScores(tasks);
console.log(scores);
