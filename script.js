// 1 = rock
// 2 = paper
// 3 = scissors
// Status = 1 computer wins, 2, player wins, 3 tie
//   c 1  2  3
// p
// 1   3  1  2
// 2   2  3  1
// 3   1  2  3

const rules = [
  [3, 1, 2],
  [2, 3, 1],
  [1, 2, 3],
];

const hands = ['rock', 'paper', 'scissors'];
const results = ['You Lose!', 'You win', 'Its a tie'];
let score = [0, 0, 0];

function computerPlay() {
  let i = Math.floor(Math.random() * 3);
  return hands[i];
}

function playRound(playerSelection, computerSelection) {
  //TODO: what happen if the player doesn't write anything?
  let player = hands.indexOf(playerSelection.toLowerCase());
  if (player !== -1) {
    let computer = hands.indexOf(computerSelection.toLowerCase());
    let winner = rules[player][computer];
    score[winner - 1]++;
    return results[winner - 1];
  } else {
    return 'Invalid selection';
  }
}

function game() {
  score = [0, 0, 0];
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt('your choice?');
    let computerSelection = computerPlay();
    let roundResult = playRound(playerSelection, computerSelection);
    console.log(roundResult);
    console.log(
      `computer = ${score[0]}, player = ${score[1]}, ties = ${score[2]}`
    );
  }
}

game();
