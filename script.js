let dice1Element = document.getElementById('dice1');
let dice2Element = document.getElementById('dice2');
let infoElement = document.querySelector('.info');

// Funkcja losująca wynik kostki (od 1 do 6)
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

// Funkcja aktualizująca wyświetlanie wyniku na stronie
function updateDice(result1, result2) {
    dice1Element.textContent = result1;
    dice2Element.textContent = result2;
    infoElement.textContent = `Rzuciłeś: ${result1} i ${result2}`;
}

// Funkcja do rozpoczęcia animacji rzutu kostką
function startRollingAnimation() {
    dice1Element.classList.add('rolling');
    dice2Element.classList.add('rolling');
}

// Funkcja do zatrzymania animacji rzutu kostką
function stopRollingAnimation() {
    dice1Element.classList.remove('rolling');
    dice2Element.classList.remove('rolling');
}

// Wartości do wykrywania potrząśnięcia
let shakeThreshold = 15; // Próg intensywności potrząśnięcia
let lastShakeTime = 0;

// Funkcja do wykrywania potrząśnięcia
window.addEventListener('devicemotion', function(event) {
    let acceleration = event.accelerationIncludingGravity;
    let currentTime = new Date().getTime();

    // Obliczamy intensywność ruchu
    let shakeIntensity = Math.sqrt(
        acceleration.x * acceleration.x + 
        acceleration.y * acceleration.y + 
        acceleration.z * acceleration.z
    );

    // Sprawdzamy czy potrząśnięcie przekracza próg i nie nastąpiło zbyt szybko po poprzednim
    if (shakeIntensity > shakeThreshold && (currentTime - lastShakeTime) > 1000) {
        lastShakeTime = currentTime;
        startRollingAnimation();

        // Losowanie wyników przez 1 sekundę
        let rollingInterval = setInterval(function() {
            let tempResult1 = rollDice();
            let tempResult2 = rollDice();
            dice1Element.textContent = tempResult1;
            dice2Element.textContent = tempResult2;
        }, 100);

        // Po 1 sekundzie zatrzymujemy animację i wyświetlamy ostateczny wynik
        setTimeout(function() {
            clearInterval(rollingInterval); // Zatrzymanie losowego wyświetlania
            let finalResult1 = rollDice(); // Ostateczny wynik pierwszej kostki
            let finalResult2 = rollDice(); // Ostateczny wynik drugiej kostki
            updateDice(finalResult1, finalResult2); // Aktualizacja wyniku na ekranie
            stopRollingAnimation(); // Zatrzymanie animacji
        }, 1000);
    }
});