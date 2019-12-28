let doYouWanPlay = confirm('Do you want to play a game?');
let randomNumber;
let minRandom = 0;
let maxRandom = 8;
let enteredNumber;
let attemps = 3;
let currentAttemp = 0;
let doYouWanPlayAgain = true;
let totalPrize = 0;
let possiblePrize = 100;
let firstPrize = 100;
let secondPrize = 50;
let thirdPrize = 25;
let gameNumber = 1;
const TWO = 2,
  FOUR = 4,
  EIGHT = 8,
  ONE_HUNDRED = 100;

if (doYouWanPlay === false) {
  alert('You did not become a billionaire, but can.');
}

if (doYouWanPlay === true) {
  while (doYouWanPlayAgain) {
    if (gameNumber !== 1) {
      firstPrize = firstPrize * TWO;
      secondPrize = secondPrize * TWO;
      thirdPrize = thirdPrize * TWO;
      maxRandom = maxRandom + FOUR;
      possiblePrize = firstPrize;
    }

    randomNumber =
      Math.floor(Math.random() * (maxRandom - minRandom + 1)) + minRandom;

    while (currentAttemp < attemps) {
      enteredNumber = parseInt(
        prompt(
          'Choose a roulette pocket number from ' +
            minRandom +
            ' to ' +
            maxRandom +
            '\n' +
            'Attempts left: ' +
            (attemps - currentAttemp) +
            '\n' +
            'Total prize: ' +
            totalPrize +
            '$' +
            '\n' +
            'Possible prize on current attemp: ' +
            possiblePrize +
            '$'
        )
      );

      if (currentAttemp === 0) {
        if (enteredNumber === randomNumber) {
          totalPrize = totalPrize + firstPrize;
          doYouWanPlayAgain = confirm(
            'Congratulation, you won! Your prize is: ' +
              totalPrize +
              '$. Do you want to continue?'
          );
          if (doYouWanPlayAgain === false) {
            alert(
              'Thank you for your participation. Your prize is: ' +
                totalPrize +
                '$'
            );
            firstPrize = ONE_HUNDRED;
            currentAttemp = 0;
            possiblePrize = firstPrize;
            doYouWanPlayAgain = true;
            gameNumber = 1;
            totalPrize = 0;
            maxRandom = EIGHT;
            break;
          }

          currentAttemp = 0;
          gameNumber++;
          break;
        }
        currentAttemp++;
        possiblePrize = secondPrize;
        continue;
      }

      if (currentAttemp === 1) {
        if (enteredNumber === randomNumber) {
          totalPrize = totalPrize + secondPrize;
          doYouWanPlayAgain = confirm(
            'Congratulation, you won! Your prize is: ' +
              totalPrize +
              '$. Do you want to continue?'
          );
          if (doYouWanPlayAgain === false) {
            alert(
              'Thank you for your participation. Your prize is: ' +
                totalPrize +
                '$'
            );
            firstPrize = ONE_HUNDRED;
            currentAttemp = 0;
            possiblePrize = firstPrize;
            doYouWanPlayAgain = true;
            gameNumber = 1;
            totalPrize = 0;
            maxRandom = EIGHT;
            break;
          }
          currentAttemp = 0;
          gameNumber++;
          break;
        }
        currentAttemp++;
        possiblePrize = thirdPrize;
        continue;
      }

      if (currentAttemp === TWO) {
        if (enteredNumber === randomNumber) {
          totalPrize = totalPrize + thirdPrize;
          doYouWanPlayAgain = confirm(
            'Congratulation, you won! Your prize is: ' +
              totalPrize +
              '$. Do you want to continue?'
          );
          if (doYouWanPlayAgain === false) {
            alert(
              'Thank you for your participation. Your prize is: ' +
                totalPrize +
                '$'
            );
            firstPrize = ONE_HUNDRED;
            currentAttemp = 0;
            possiblePrize = firstPrize;
            doYouWanPlayAgain = true;
            gameNumber = 1;
            totalPrize = 0;
            maxRandom = EIGHT;
            break;
          }
          currentAttemp = 0;
          gameNumber++;
          break;
        }
        if (enteredNumber !== randomNumber) {
          totalPrize = 0;
          alert(
            'Thank you for your participation. Your prize is: ' +
              totalPrize +
              '$'
          );
          currentAttemp++;
          doYouWanPlayAgain = confirm('Do you want to play again?');
          if (doYouWanPlayAgain) {
            firstPrize = ONE_HUNDRED;
            currentAttemp = 0;
            possiblePrize = firstPrize;
            doYouWanPlayAgain = true;
            gameNumber = 1;
            totalPrize = 0;
            maxRandom = EIGHT;
            break;
          }
        }
      }
    }
  }
}
