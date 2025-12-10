let temporitzador;
let tempsRestant = 0;
let corrent = false;
let tempsInicial = 0; // Guardem temps inicial

const alarma = new Audio('js/alarm.mp3');

const display = document.getElementById("temporitzadorDisplay");
const horesInput = document.getElementById("horesInput");
const minutsInput = document.getElementById("minutsInput");
const segonsInput = document.getElementById("segonsInput");

document.getElementById("startBtn").addEventListener("click", startTemporitzador);
document.getElementById("pauseBtn").addEventListener("click", pauseTemporitzador);
document.getElementById("resetBtn").addEventListener("click", resetTemporitzador);

function updateDisplay() {
    let hores = Math.floor(tempsRestant / 3600);
    let minuts = Math.floor((tempsRestant % 3600) / 60);
    let segons = tempsRestant % 60;

    display.textContent =
        `${String(hores).padStart(2,'0')}:${String(minuts).padStart(2,'0')}:${String(segons).padStart(2,'0')}`;

    if (tempsRestant === 0) {
        display.classList.add("finished");
        alarma.play().catch(() => {});
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
            tempsRestant = h * 3600 + m * 60 + s;
            tempsInicial = tempsRestant;
        }

        if (tempsRestant <= 0) return;

        corrent = true;
        temporitzador = setInterval(() => {
            if (tempsRestant > 0) {
                tempsRestant--;
                updateDisplay();
            } else {
                clearInterval(temporitzador);
                corrent = false;
                updateDisplay();
            }
        }, 1000);
    }
}

function pauseTemporitzador() {
    clearInterval(temporitzador);
    corrent = false;
    updateDisplay();
}

function resetTemporitzador() {
    clearInterval(temporitzador);
    corrent = false;
    tempsRestant = tempsInicial;
    display.classList.remove("finished");
    alarma.pause();
    alarma.currentTime = 0;
    updateDisplay();
}
