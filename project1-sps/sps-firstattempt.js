// Since the object is always reused, it's very tedious to type and is prone to typo, can I store it as a variable?
var mode = "normal";

var scissors = "scissors";
var paper = "paper";
var stone = "stone";
var reversedScissors = "reversed scissors";
var reversedStone = "reversed stone";
var reversedPaper = "reversed paper";

// Create a helper function that generates "scissors" "paper" and "stone" randomly.

var genSPSRandom = function () {
  var randomInteger = Math.ceil(Math.random() * 3);
  if (randomInteger == 1) {
    return scissors;
  }
  if (randomInteger == 2) {
    return paper;
  }
  if (randomInteger == 3) {
    return stone;
  }
};

var genSPSEmoji = function (SPS) {
  if (SPS == scissors || SPS == reversedScissors) {
    return "✂️";
  }
  if (SPS == paper || SPS == reversedPaper) {
    return "📝";
  }

  if (SPS == stone || SPS == reversedStone) {
    return "💎";
  }
};

var main = function (input) {
  // // Input Validation
  // If the word is not scissors, paper nor stone, let the user know that there are only three input options: scissors, paper and stone, please try again.
  if (
    input != scissors &&
    input != paper &&
    input != stone &&
    input != reversedScissors &&
    input != reversedPaper &&
    input != reversedStone
  ) {
    return `Input invalid, please try again. Please type in scissors, paper, or stone to play the game.`;
  }

  var computerThrows = genSPSRandom();
  console.log(computerThrows);
  var playerThrows = input;
  var playerEmoji = genSPSEmoji(input);
  var computerEmoji = genSPSEmoji(computerThrows);

  // set default value to be you lose, unless certain sets of criteria is fulfilled
  var myOutputValue =
    `You threw ` +
    playerThrows +
    ` ` +
    playerEmoji +
    `.` +
    `<br>` +
    `Computer threw ` +
    computerThrows +
    ` ` +
    computerEmoji +
    `.` +
    `<br> <br>` +
    `You lose! Bummer.` +
    `<br>` +
    `Better luck next time!`;

  // The game results in a draw when both the user and the computer threw the same object
  if (
    playerThrows == computerThrows ||
    (playerThrows == reversedScissors && computerThrows == scissors) ||
    (playerThrows == reversedStone && computerThrows == stone) ||
    (playerThrows == reversedPaper && computerThrows == paper)
  ) {
    myOutputValue =
      `It's a draw! ` +
      `<br>` +
      `Both you and the computer chose ` +
      playerThrows +
      ` ` +
      playerEmoji +
      `.`;
  }

  // User wins
  // If user throws scissors, computer throws paper
  // If user throws stone, computer throws scissors
  // If user throws paper, computer throws stone

  if (
    (playerThrows == scissors && computerThrows == paper) ||
    (playerThrows == stone && computerThrows == scissors) ||
    (playerThrows == paper && computerThrows == stone) ||
    (playerThrows == reversedScissors && computerThrows == stone) ||
    (playerThrows == reversedStone && computerThrows == paper) ||
    (playerThrows == reversedPaper && computerThrows == scissors)
  ) {
    myOutputValue =
      `You threw ` +
      playerThrows +
      ` ` +
      playerEmoji +
      `.` +
      `<br>` +
      `Computer threw` +
      computerThrows +
      ` ` +
      computerEmoji +
      `.` +
      `<br><br>` +
      `You won! Congratulations!` +
      `<br>` +
      `Let's play again!`;
  }

  return myOutputValue;
};
