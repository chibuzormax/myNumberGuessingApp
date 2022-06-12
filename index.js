// FUNCTIONS/ARROW FUNCTIONS TASK...


const prompt = require("prompt-sync")({ sigint: true });

// The prompt-sync is to enable input from the user..
console.log("\n*********************************************************************\n");
const playerName = prompt("Welcome Player!!! please enter your Username: ");
console.log("\n");
console.log(`Welcome ${playerName}! \nThis Game is all about guessing numbers, you will be required to guess an integer \nbetween the specified range! Each correct guess takes you to a new Level. \nHowever, any wrong guess kicks you out of the game! \nSo ${playerName} let's get started`); // Game instruction to player..
console.log("\n");

// initializing our variables
const lowerLimit = 1; // Always be fixed at 1.

let upperLimit = 2; // The start value of the upper range.

let levelCount = 1; //The first stage.
let stillPlaying = false; 
let playerPoint = 0; // Starting point for all players

// The random number generation function (arrow funtion)
let guessMe = (lowerLimit, upperLimit) => {
    let randomNumber = Math.round(lowerLimit + Math.random() * (upperLimit - 1));
    return randomNumber; //return the randomly generated number
}

// Arrow function for wrong guess by the player
let terminateGame = () => {
    stillPlaying = true;
    console.log("\n");
    console.log("Please refresh the console to try again! Good-Luck this time around...");
    console.log("\n");
}

// Fuction to enable a player continue after a correct guess
while (!stillPlaying) {
    let myMysteriousNumber = guessMe(lowerLimit, upperLimit);
    // A welcoming message into the Stage 1 Only!
    if (levelCount === 1) {
        console.log("<<< WELCOME TO STAGE 1 >>> \nGuess the secret number at each stage correctly and advance in Stages, else you'll have to start all over!");
        console.log(`You currently have no points`);
        console.log("\n************************************************\n");
    }

// Taking the player guess and storing it in a variable called yourGuess as an Integer.
    let yourGuess = parseInt(prompt(`Guess the mysterious integer within the closed interval ${lowerLimit} and ${upperLimit}? Think carefully >>> `), 10);

  // To advance to the next stage after a correct guess
    if (yourGuess === myMysteriousNumber) {
        console.log("\n");
        console.log(`Congrats ${playerName}!!! That was an intelligent guess for Level ${levelCount}! ${myMysteriousNumber} is the "Mysterious Number", and your choice of ${yourGuess} is 100 % correct...Now move on to level ${levelCount + 1}...`);
        console.log("\n");
        // Incrementing the key variables
        levelCount += 1;
        upperLimit += 1;
        playerPoint += 1;
        console.log(`<<< WELCOME TO STAGE ${levelCount} >>>`);
        if(playerPoint === 1){
          console.log(`You currently have ${playerPoint} point.`); //for Singular Score.
        }else{
          console.log(`You currently have ${playerPoint} points.`); //for Plural Score.
        }
        
        console.log("\n************************************\n");
    } else {
        // This shuts down the game once the user loses
        console.log("\n");
        console.log(`Sorry! Wrong Guess ${playerName}!!!`);
        console.log(`The correct guess was supposed to be ${myMysteriousNumber}.`);
        console.log(`Your guess of ${yourGuess} didn't match and that means Game Over!!!`);
        console.log(`The Highest Level you reached is Level ${levelCount} and your total Score is ${playerPoint}.`);
        terminateGame(); //This function is called to terminate the game.
    }

}
