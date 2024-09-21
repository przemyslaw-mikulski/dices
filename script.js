let dice1Element = document.getElementById('dice1');
let dice2Element = document.getElementById('dice2');
let infoElement = document.querySelector('.info');
let rollButton = document.getElementById('rollButton');

// Array to map numbers to dice face icons (from 1 to 6)
const diceIcons = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];

// Function to roll a die (returns a number between 1 and 6)
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

// Function to update the dice display with dice face icons
function updateDice(result1, result2) {
    dice1Element.textContent = diceIcons[result1 - 1]; // Show dice face for result1
    dice2Element.textContent = diceIcons[result2 - 1]; // Show dice face for result2
    infoElement.textContent = `You rolled: ${diceIcons[result1 - 1]} and ${diceIcons[result2 - 1]}`;
}

// Function to start the rolling animation (showing generic dice icons)
function startRollingAnimation() {
    dice1Element.classList.add('rolling');
    dice2Element.classList.add('rolling');
    dice1Element.textContent = '🎲'; // Show generic dice icon during roll
    dice2Element.textContent = '🎲'; // Show generic dice icon during roll
}

// Function to stop the rolling animation
function stopRollingAnimation() {
    dice1Element.classList.remove('rolling');
    dice2Element.classList.remove('rolling');
}

// Event listener for the roll button
rollButton.addEventListener('click', function() {
    // Start rolling animation
    startRollingAnimation();

    // Temporary dice rolling effect during the 1-second animation
    let rollingInterval = setInterval(function() {
        dice1Element.textContent = '🎲'; // Keep showing the generic dice icon
        dice2Element.textContent = '🎲'; // Keep showing the generic dice icon
    }, 100);

    // Stop the animation after 1 second and show the final result
    setTimeout(function() {
        clearInterval(rollingInterval); // Stop the temporary rolling effect
        let finalResult1 = rollDice(); // Final result for first die
        let finalResult2 = rollDice(); // Final result for second die
        updateDice(finalResult1, finalResult2); // Update the dice with final face icons
        stopRollingAnimation(); // Stop the rolling animation
    }, 1000); // Animation duration (1 second)
});