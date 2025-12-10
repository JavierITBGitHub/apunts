let temporitzador;
let tempsRestant = 0;
let corrent = false;
let tempsInicial = 0;

// So alarma (Assegurar que la ruta a l'arxiu és correcta: js/alarm.mp3)
const alarma = new Audio('js/alarm.mp3');

const display = document.getElementById("temporitzadorDisplay");
const horesInput = document.getElementById("horesInput");
const minutsInput = document.getElementById("minutsInput");
const segonsInput = document.getElementById("segonsInput");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");
const inputs = [horesInput, minutsInput, segonsInput]; // Per facilitar el control

document.addEventListener('DOMContentLoaded', () => {
    updateDisplay();
    toggleControls(false);
});

startBtn.addEventListener("click", startTemporitzador);
pauseBtn.addEventListener("click", pauseTemporitzador);
resetBtn.addEventListener("click", resetTemporitzador);

// Funció per activar/desactivar els controls (usabilitat)
function toggleControls(isRunning) {
    inputs.forEach(input => input.disabled = isRunning);
    startBtn.disabled = isRunning;
    pauseBtn.disabled = !isRunning;
    // Reset ha d'estar actiu si hi ha hagut un temps inicial o el temps no és zero
    resetBtn.disabled = (tempsInicial === 0 && tempsRestant === 0 && !isRunning);
}

function updateDisplay() {
    let hores = Math.floor(tempsRestant / 3600);
    let minuts = Math.floor((tempsRestant % 3600) / 60);
    let segons = tempsRestant % 60;

    display.textContent =
        `${String(hores).padStart(2,'0')}:${String(minuts).padStart(2,'0')}:${String(segons).padStart(2,'0')}`;

    // Control d'estils CSS
    display.classList.toggle("running", corrent);

    if (tempsRestant === 0 && !corrent && tempsInicial > 0) {
        display.classList.add("finished");
        // Intentar reproduir l'alarma (pot ser bloquejat)
        alarma.play().catch(e => console.log("Alarma bloquejada per l'usuari/navegador.", e));
        toggleControls(false);
        pauseBtn.disabled = true;
    } else {
        display.classList.remove("finished");
    }
}

function startTemporitzador() {
    if (!corrent) {
        if (tempsRestant === 0) {
            let h = parseInt(horesInput.value) || 0;
            let m = parseInt(minutsInput.value) || 0;
            let s = parseInt(segonsInput.value) || 0;

            // Validació: temps ha de ser positiu
            tempsRestant = h * 3600 + m * 60 + s;
            if (tempsRestant <= 0) return;

            tempsInicial = tempsRestant;
        }

        corrent = true;
        toggleControls(true); // Desactivar inputs i botó Start

        temporitzador = setInterval(() => {
            if (tempsRestant > 0) {
                tempsRestant--;
                updateDisplay();
            } else {
                clearInterval(temporitzador);
                corrent = false;
                updateDisplay(); // Mostrar 00:00:00 i activar alarma/estil finished
            }
        }, 1000);
    }
}

function pauseTemporitzador() {
    if (corrent) {
        clearInterval(temporitzador);
        corrent = false;
        toggleControls(false); // Permetre prémer Start
        startBtn.disabled = false;
        updateDisplay();
    }
}

function resetTemporitzador() {
    clearInterval(temporitzador);
    corrent = false;

    // Si hi havia un temps inicial, hi tornem. Si no, a zero.
    tempsRestant = tempsInicial;

    // Si el reset és total (temps inicial 0), netegem inputs
    if (tempsInicial === 0) {
         inputs.forEach(input => input.value = "");
    }

    // Aturar alarma i reiniciar
    alarma.pause();
    alarma.currentTime = 0;

    updateDisplay();
    toggleControls(false);
    pauseBtn.disabled = true; // No es pot pausar quan està parat o reiniciat

    // Si el temps inicial era 0, assegurem que el reset quedi desactivat
    if (tempsInicial === 0) resetBtn.disabled = true;
}