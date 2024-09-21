let dice1Element = document.getElementById('dice1');
let dice2Element = document.getElementById('dice2');
let infoElement = document.querySelector('.info');
let rollButton = document.getElementById('rollButton');

// Function to roll a die (returns a number between 1 and 6)
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

// Function to update the dice display
function updateDice(result1, result2) {
    dice1Element.textContent = result1;
    dice2Element.textContent = result2;
    infoElement.textContent = `Rzuciłeś: ${result1} i ${result2}`;
}

// Function to start the rolling animation
function startRollingAnimation() {
    dice1Element.classList.add('rolling');
    dice2Element.classList.add('rolling');
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

    // Generate random dice numbers during the 1-second roll animation
    let rollingInterval = setInterval(function() {
        let tempResult1 = rollDice();
        let tempResult2 = rollDice();
        dice1Element.textContent = tempResult1;
        dice2Element.textContent = tempResult2;
    }, 100);

    // Stop the animation after 1 second and show the final result
    setTimeout(function() {
        clearInterval(rollingInterval); // Stop random number generation
        let finalResult1 = rollDice(); // Final result for first die
        let finalResult2 = rollDice(); // Final result for second die
        updateDice(finalResult1, finalResult2); // Update the dice display
        stopRollingAnimation(); // Stop the animation
    }, 1000); // Animation duration (1 second)
});