const options = ["rock", "paper", "scissors"];
/*Here, the options rock paper and scissors are stored in the indices 0, 1, and 2 
which will be later used by the computer to return one of the value from the three*/

function getComputerChoice() { //Writing a function "get ComputerChoice"- A reusable block of code to choose either rock, paper or scissors      

    const i = Math.floor(Math.random()*3); //Math.random returns random value from the const indices 0 to 1 which is then multiplied by 3
    // Math.floor rounds up the value to give an whole number so that the output will return the indices 0 to 2
    return options[i];
}

function getHumanChoice () { //Writing a function "get HumanChoice"- A reusable block of code to prompt the user to choose either rock, paper or scissors
    return prompt("What is your choice?"). toLocaleLowerCase //Prompts the user to enter rock, paper or scissors and .toLowerCase converts if the user types in uppercase

}

function playGame () { //This game consists of 5 rounds
    let humanScore = 0;
    let computerScore = 0;
    //Initially setting up the score of player and computer to zero
    function playRound (HumanChoice, ComputerChoice) {
        if (HumanChoice == ComputerChoice){
            console.log("The game is tied!");
            return;
        }

        const wins = {
            rock: "scissors",
            scissors: "Paper",
            paper: "rock",
        }; //Here, we are declaring the constant victory logic by "OBJECTS - Key:Value pair"

        if (wins[HumanChoice] === ComputerChoice) { //This condition looks up if the value is true or not from the declared "OBJECTS"
            humanScore++;
            console.log(
                `You Win! $(HumanChoice.toUpperCase()} beats $(ComputerChoice.toUpperCase()}`
            );
            
        } else {
            computerScore++;
            console.log(
                `You Lose! $(ComputerChoice.toUpperCase()} beats $(HumanChoice.toUpperCase()}`
            );
        }

    }
    for (let i=0; i<5; i++) {
        playRound(getHumanChoice(), getComputerChoice()); // This is a "For Loop" that iterates the function for 5 times
    }

    if (humanScore===computerScore)
        console.log(`You are tied with $(humanScore) points each`);
    else {
        humanScore < computerScore
        ? console.log(`You have lost the game!`)
        : console.log(`You lost won the game!`); // ?: is a ternary operator with is also a short if else statement
    }
}
playGame();




