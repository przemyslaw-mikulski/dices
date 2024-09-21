let dice1Element = document.getElementById('dice1');
let dice2Element = document.getElementById('dice2');
let infoElement = document.querySelector('.info');
let rollButton = document.getElementById('rollButton');

// Function to roll a die (returns a number between 1 and 6)
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

// Function to update the dice display with the final images
function updateDice(result1, result2) {
    dice1Element.src = `images/dice${result1}.png`; // Set image for result1
    dice2Element.src = `images/dice${result2}.png`; // Set image for result2
    infoElement.textContent = `You rolled: ${result1} and ${result2}`;
}

// Function to start the rolling animation (showing a placeholder image)
function startRollingAnimation() {
    dice1Element.classList.add('rolling');
    dice2Element.classList.add('rolling');
    dice1Element.src = 'images/dice1.png'; // Placeholder image during roll
    dice2Element.src = 'images/dice1.png'; // Placeholder image during roll
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
        dice1Element.src = 'images/dice1.png'; // Placeholder during roll
        dice2Element.src = 'images/dice1.png'; // Placeholder during roll
    }, 100);

    // Stop the animation after 1 second and show the final result
    setTimeout(function() {
        clearInterval(rollingInterval); // Stop the temporary rolling effect
        let finalResult1 = rollDice(); // Final result for first die
        let finalResult2 = rollDice(); // Final result for second die
        updateDice(finalResult1, finalResult2); // Update the dice with final images
        stopRollingAnimation(); // Stop the rolling animation
    }, 1000); // Animation duration (1 second)
});