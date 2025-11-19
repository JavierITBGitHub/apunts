/**
 * Aplicació principal
 */

// Actualitzar rellotge en temps real
function updateCurrentTime() {
    const now = new Date();
    const options = {
        dateStyle: 'full',
        timeStyle: 'medium'
    };
    const timeString = now.toLocaleString('ca-ES', options);
    document.getElementById('currentTime').textContent = `Actualitzat: ${timeString}`;
}

// Inicialitzar l'aplicació
document.addEventListener('DOMContentLoaded', () => {
    // Inicialitzar gestors
    const countdownManager = new CountdownManager();
    const weatherManager = new WeatherManager();

    // Iniciar comptes enrere
    countdownManager.init();

    // Iniciar meteorologia
    weatherManager.init();

    // Actualitzar hora actual
    updateCurrentTime();
    setInterval(updateCurrentTime, 1000);
});