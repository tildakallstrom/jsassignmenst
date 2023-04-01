function calculateScore() {
    let scores = [];
    let totalScoreElement = document.getElementById("totalScore");

    for (let i = 1; i <= 4; i++) {
      let score = parseFloat(document.getElementById("score" + i).value);
      scores.push(score);
    }

    let sum = scores.reduce((acc, val) => acc + val);
    let minScore = Math.min(...scores);
    let maxScore = Math.max(...scores);

    let totalScore = (sum - minScore - maxScore).toFixed(2);
    document.getElementById("contestScore").innerHTML = "The contestant's score is: " + totalScore;
  }