// Global Variables to set initial game states

var currentGameMode = `waiting for user name`;

// Create a global variable called User Name: ask user to enter user name
var userName = ``;

var spsMode = ``;

//Track number of games played
var numGamesPlayed = 0;

//Track number of games won
var numGamesWon = 0;

var numGamesLost = 0;

var numGamesDrawn = 0;

var winRate;

// Since the object is always reused, it's very tedious to type and is prone to typo, can I store it as a variable?

var scissors = "scissors";
var paper = "paper";
var stone = "stone";
var revScissors = "reversed scissors";
var revPaper = "reversed paper";
var revStone = "reversed stone";

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

// Create a helper function that generates the emoji that symbolizes scissors, paper and stone respectively.

var genSPSEmoji = function (SPS) {
  if (SPS == scissors || SPS == revScissors) {
    return "✂️";
  }
  if (SPS == paper || SPS == revPaper) {
    return "📝";
  }

  if (SPS == stone || SPS == revStone) {
    return "💎";
  }
};

// Create helper functions that contains win, lose or draw conditions
var drawCondition = function (playerThrow, computerThrow) {
  return (
    playerThrow == computerThrow ||
    (playerThrow == revScissors && computerThrow == scissors) ||
    (playerThrow == revPaper && computerThrow == paper) ||
    (playerThrow == revStone && computerThrow == stone)
  );
};

var winConditionNormalMode = function (playerThrow, computerThrow) {
  return (
    (playerThrow == scissors && computerThrow == paper) ||
    (playerThrow == stone && computerThrow == scissors) ||
    (playerThrow == paper && computerThrow == stone)
  );
};

var winConditionReverseMode = function (playerThrow, computerThrow) {
  return (
    (playerThrow == revScissors && computerThrow == stone) |
      (playerThrow == revStone && computerThrow == paper) ||
    (playerThrow == revPaper && computerThrow == scissors)
  );
};

var myOutputValue = ``;

var main = function (input) {
  // Create a game mode for users to enter their user name and invite them to choose a game mode as an output.

  console.log(currentGameMode);
  if (currentGameMode == `waiting for user name`) {
    if (!input) {
      return `Please input your user name to play the game!`;
    }
    userName = input;
    currentGameMode = "choose game mode";

    return (
      `Hello ` +
      userName +
      `! Welcome to Andrew's scissors paper stone game!` +
      `<br>` +
      `Please enter 1 to play the normal mode.` +
      `<br>` +
      `Please enter 2 to play the reverse mode.`
    );
  }
  console.log("Currently the game mode is", currentGameMode);

  if (currentGameMode == `choose game mode`) {
    spsMode = input;

    if (input == "1") {
      currentGameMode = `sps normal mode`;

      return (
        `You've chosen the normal mode!` +
        `<br>` +
        `Please input scissors, paper or stone to play the game!`
      );
    } else if (input == "2") {
      currentGameMode = `sps reverse mode`;

      return (
        `You've chosen the reverse mode!` +
        `<br>` +
        `Please input reversed scissors, reversed paper or reversed stone to play the game!`
      );
    } else {
      return `Please input either "1" or "2" to choose a game mode`;
    }
  }
  console.log(currentGameMode);
  if (currentGameMode == `sps normal mode`) {
    // increase the number of games played by 1
    numGamesPlayed += 1;

    console.log(currentGameMode);
    console.log(numGamesPlayed);
    // Validate input: if input is not scissors, paper or stone, instruct user to type in scissors, paper or stone to play the game.s

    var playerThrows = input;

    var computerPlayed = genSPSRandom();
    console.log(computerPlayed);
    var playerEmoji = genSPSEmoji(input);
    var computerEmoji = genSPSEmoji(computerPlayed);

    // set default value to be you lose, unless certain sets of criteria is fulfilled
    if (
      playerThrows != scissors &&
      playerThrows != paper &&
      playerThrows != stone
    ) {
      return `Please type in scissors, paper or stone to play the game`;
    }
    // Check if the game results in a draw
    if (drawCondition(playerThrows, computerPlayed)) {
      numGamesDrawn += 1;
      winRate = Math.floor((numGamesWon / numGamesPlayed) * 100);
      return (
        `It's a draw! ` +
        `<br>` +
        `Both you and the computer chose ` +
        playerThrows +
        ` ` +
        playerEmoji +
        `<br><br>` +
        `Your win/loss record is ` +
        `<br>` +
        userName +
        ` won : ` +
        numGamesWon +
        ` times. ` +
        `(` +
        winRate +
        ` %)` +
        `<br>` +
        `Computer` +
        ` won : ` +
        numGamesLost +
        ` times.` +
        `<br>` +
        `Draw: ` +
        numGamesDrawn +
        ` times.`
      );
    }

    // Check if the game results in the user winning
    else if (winConditionNormalMode(playerThrows, computerPlayed)) {
      numGamesWon += 1;
      console.log(numGamesWon);
      var winRate = Math.floor((numGamesWon / numGamesPlayed) * 100);
      console.log(winRate);
      return (
        userName +
        ` threw: ` +
        playerThrows +
        ` ` +
        playerEmoji +
        `.` +
        `<br>` +
        `Computer threw: ` +
        computerPlayed +
        ` ` +
        computerEmoji +
        `.` +
        `<br><br>` +
        `You won! Congratulations! 🎉 ` +
        `<br>` +
        `Your win/loss record is ` +
        `<br>` +
        userName +
        ` won : ` +
        numGamesWon +
        ` times. ` +
        `(` +
        winRate +
        ` %)` +
        `<br>` +
        `Computer` +
        ` won : ` +
        numGamesLost +
        ` times.` +
        `<br>` +
        `Draw: ` +
        numGamesDrawn +
        ` times.`
      );
    } else numGamesLost += 1;
    winRate = Math.floor((numGamesWon / numGamesPlayed) * 100);
    return (
      `You threw ` +
      playerThrows +
      ` ` +
      playerEmoji +
      `.` +
      `<br>` +
      `Computer played ` +
      computerPlayed +
      ` ` +
      computerEmoji +
      `.` +
      `<br> <br>` +
      `You've lost this round 😭.` +
      `<br>` +
      `Your win/loss record is ` +
      `<br>` +
      userName +
      ` won : ` +
      numGamesWon +
      ` times. ` +
      `(` +
      winRate +
      ` %)` +
      `<br>` +
      `Computer` +
      ` won : ` +
      numGamesLost +
      ` times.` +
      `<br>` +
      `Draw: ` +
      numGamesDrawn +
      ` times.`
    );
  }
  if (currentGameMode == `sps reverse mode`) {
    // increase the number of games played by 1
    numGamesPlayed += 1;
    console.log(currentGameMode);
    console.log(numGamesPlayed);
    // Validate input: if input is not scissors, paper or stone, instruct user to type in scissors, paper or stone to play the game.s

    var playerThrows = input;
    var winRate = Math.floor((numGamesWon / numGamesPlayed) * 100);
    console.log(winRate);
    var computerPlayed = genSPSRandom();
    console.log(computerPlayed);
    var playerEmoji = genSPSEmoji(input);
    var computerEmoji = genSPSEmoji(computerPlayed);

    // set default value to be you lose, unless certain sets of criteria is fulfilled
    if (
      playerThrows != revScissors &&
      playerThrows != revPaper &&
      playerThrows != revStone
    ) {
      return `Please type in reversed scissors, reversed paper or reversed stone to play the game`;
    }
    // Check if the game results in a draw
    if (drawCondition(playerThrows, computerPlayed)) {
      numGamesDrawn += 1;
      return (
        `It's a draw! ` +
        `<br>` +
        `Both you and the computer chose ` +
        playerThrows +
        ` ` +
        playerEmoji +
        `<br><br>` +
        `Your win/loss record is ` +
        `<br>` +
        userName +
        ` won : ` +
        numGamesWon +
        ` times. ` +
        `(` +
        winRate +
        ` %)` +
        `<br>` +
        `Computer` +
        ` won : ` +
        numGamesLost +
        ` times.` +
        `<br>` +
        `Draw: ` +
        numGamesDrawn +
        ` times.`
      );
    }

    // Check if the game results in the user winning
    else if (winConditionReverseMode(playerThrows, computerPlayed)) {
      numGamesWon += 1;
      console.log(numGamesWon);
      return (
        userName +
        ` threw: ` +
        playerThrows +
        ` ` +
        playerEmoji +
        `.` +
        `<br>` +
        `Computer threw: ` +
        computerPlayed +
        ` ` +
        computerEmoji +
        `.` +
        `<br><br>` +
        `You won! Congratulations! 🎉 ` +
        `<br>` +
        `Your win/loss record is ` +
        `<br>` +
        userName +
        ` won : ` +
        numGamesWon +
        ` times. ` +
        `(` +
        winRate +
        ` %)` +
        `<br>` +
        `Computer` +
        ` won : ` +
        numGamesLost +
        ` times.` +
        `<br>` +
        `Draw: ` +
        numGamesDrawn +
        ` times.`
      );
    } else numGamesLost += 1;
    return (
      `You threw ` +
      playerThrows +
      ` ` +
      playerEmoji +
      `.` +
      `<br>` +
      `Computer played ` +
      computerPlayed +
      ` ` +
      computerEmoji +
      `.` +
      `<br> <br>` +
      `You've lost this round 😭.` +
      `<br>` +
      `Your win/loss record is ` +
      `<br>` +
      userName +
      ` won : ` +
      numGamesWon +
      ` times. ` +
      `(` +
      winRate +
      ` %)` +
      `<br>` +
      `Computer` +
      ` won : ` +
      numGamesLost +
      ` times.` +
      `<br>` +
      `Draw: ` +
      numGamesDrawn +
      ` times.`
    );
  }
};
