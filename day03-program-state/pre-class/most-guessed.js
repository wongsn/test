// Track the frequency of each dice value, and set the default value to zero.

var diceVal1Freq = 0;
var diceVal2Freq = 0;
var diceVal3Freq = 0;
var diceVal4Freq = 0;
var diceVal5Freq = 0;
var diceVal6Freq = 0;

// Set a function that returns the value of a dice roll

var rollDice = function(){
  var diceNumber = Math.ceil(Math.random()*6);
  return diceNumber
}

// Set a function that increases the frequency of dice rolled when that particular dice is rolled. i.e. when number 2 is rolled, increase diceVal2Freq by 1

var incrDiceValFreq = function (diceVal) {
if (diceVal == 1){
  diceVal1Freq +=1;
}
else if (diceVal ==2){
  diceVal2Freq +=1;
}
else if (diceVal ==3){
  diceVal3Freq +=1;
}
else if (diceVal ==4){
  diceVal4Freq +=1;
}
else if (diceVal ==5){
  diceVal5Freq +=1;
}
else if (diceVal ==6){
  diceVal6Freq +=1;
}
};

// Set a function that returns information about the most rolled dice value

var getMostFreqRolled = function (){
  if (
    diceVal1Freq > diceVal2Freq &&
    diceVal1Freq > diceVal3Freq &&
    diceVal1Freq > diceVal4Freq &&
    diceVal1Freq > diceVal5Freq &&
    diceVal1Freq > diceVal6Freq
  ) {
    return 'You roll 1 most often';
  } else if (
    diceVal2Freq > diceVal1Freq &&
    diceVal2Freq > diceVal3Freq &&
    diceVal2Freq > diceVal4Freq &&
    diceVal2Freq > diceVal5Freq &&
    diceVal2Freq > diceVal6Freq
  ) {
    return 'You roll 2 most often';
  } else if (
    diceVal3Freq > diceVal1Freq &&
    diceVal3Freq > diceVal2Freq &&
    diceVal3Freq > diceVal4Freq &&
    diceVal3Freq > diceVal5Freq &&
    diceVal3Freq > diceVal6Freq
  ) {
    return 'You roll 3 most often';
  } else if (
    diceVal4Freq > diceVal1Freq &&
    diceVal4Freq > diceVal2Freq &&
    diceVal4Freq > diceVal3Freq &&
    diceVal4Freq > diceVal5Freq &&
    diceVal4Freq > diceVal6Freq
  ) {
    return 'You roll 4 most often';
  } else if (
    diceVal5Freq > diceVal1Freq &&
    diceVal5Freq > diceVal2Freq &&
    diceVal5Freq > diceVal3Freq &&
    diceVal5Freq > diceVal4Freq &&
    diceVal5Freq > diceVal6Freq
  ) {
    return 'You roll 5 most often';
  } else if (
    diceVal6Freq > diceVal1Freq &&
    diceVal6Freq > diceVal2Freq &&
    diceVal6Freq > diceVal3Freq &&
    diceVal6Freq > diceVal4Freq &&
    diceVal6Freq > diceVal5Freq
  ) {
    return 'You roll 6 most often';
  }
  // else handle scenario where there isn't a most frequently rolled dice num
  return "You don't have a most-rolled dice";
};

} 
var mostRolledMain = function (input) {
  // Attempt the More Comfortable: Most Rolled exercise from the Program Lifecycle and State module below with mostRolledMain as the main function.
  var userGuess = Number(input);
  if (userGuess >6 || userGuess <1){
    return `Please enter a number from 1 to 6.`;
  }

  var randomDiceValue = rollDice();
  console.log (randomDiceValue);
  console.log (diceVal1Freq);
  console.log (diceVal2Freq);
  console.log (diceVal3Freq);
  console.log (diceVal4Freq);
  console.log (diceVal5Freq);
  console.log (diceVal6Freq);

  incrDiceValFreq(randomDiceValue);
  var mostFreqRolledDiceInfo = getMostFreqRolled();

  
  var myOutputValue = mostFreqRolledDiceInfo;
  return myOutputValue;
};
