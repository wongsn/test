numGamesPlayed += 1;
console.log(numGamesPlayed);
// Validate input: if input is not scissors, paper or stone, instruct user to type in scissors, paper or stone to play the game.s

playerThrows = input;
winRate = (numGamesWon / numGamesPlayed) * 100;
console.log(winRate);
computerPlayed = genSPSRandom();
console.log(computerPlayed);
playerEmoji = genSPSEmoji(input);
computerEmoji = genSPSEmoji(computerPlayed);
