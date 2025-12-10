const LAT = 41.3888; // Latitud de Barcelona
const LON = 2.1590; // Longitud de Barcelona
const CACHE_DURATION = 10 * 60 * 1000; // Refrescar la temperatura cada 10 minuts
let lastWeatherFetch = 0;

function getWeatherDescription(code) {
    // Mapeig simplificat del Codi Meteorològic WMO
    if (code >= 0 && code <= 1) return "Cel Net ☀️";
    if (code >= 2 && code <= 3) return "Parcialment Ennuvolat 🌤️";
    if (code >= 51 && code <= 65) return "Pluja 🌧️";
    if (code >= 71 && code <= 75) return "Neu ❄️";
    if (code >= 95) return "Tempesta ⛈️";
    return "Variable ☁️";
}

async function getTemperaturaBarcelona() {
    // API Open-Meteo (no requereix API Key)
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}&current=temperature_2m,weather_code&temperature_unit=celsius&timezone=Europe%2FMadrid`;

    try {
        const resposta = await fetch(url);
        if (!resposta.ok) {
            throw new Error(`Error API: ${resposta.status}`);
        }
        const dades = await resposta.json();

        // Extreure la temperatura i el codi
        const temp = Math.round(dades.current.temperature_2m);
        const code = dades.current.weather_code;
        const descripcio = getWeatherDescription(code);

        document.getElementById("temperatura").textContent =
            `${temp} ºC | ${descripcio}`;

        lastWeatherFetch = new Date().getTime();

    } catch (error) {
        console.error("Error obtenint la temperatura:", error);
        document.getElementById("temperatura").textContent = "Error Météo 🚨";
    }
}

function actualitzaRellotge() {
    const ara = new Date();

    // Rellotge 24h
    const hores = String(ara.getHours()).padStart(2, '0');
    const minuts = String(ara.getMinutes()).padStart(2, '0');
    const segons = String(ara.getSeconds()).padStart(2, '0');

    document.getElementById("rellotge").textContent =
        `${hores}:${minuts}:${segons}`;

    const opcionsData = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById("data").textContent =
        ara.toLocaleDateString('ca-ES', opcionsData);

    actualitzaComptadors(ara);

    // Météo: Refrescar si han passat 10 minuts
    if (ara.getTime() - lastWeatherFetch > CACHE_DURATION) {
        getTemperaturaBarcelona();
    }
}


function actualitzaComptadors(ara) {
    const anyActual = ara.getFullYear();
    const msPerDia = 1000 * 60 * 60 * 24;

    // --- Nadal (25 de Desembre) ---
    let nadal = new Date(anyActual, 11, 25);
    if (ara > nadal) {
        nadal.setFullYear(anyActual + 1);
    }
    const diesNadal = Math.ceil((nadal.getTime() - ara.getTime()) / msPerDia);

    document.getElementById("comptadorNadal").innerHTML =
        `<p><strong>${diesNadal}</strong> dies fins a Nadal 🎄</p>`;


    // --- Sant Joan (24 de Juny) ---
    let santJoan = new Date(anyActual, 5, 24);
    if (ara > santJoan) {
        santJoan.setFullYear(anyActual + 1);
    }
    const diesSantJoan = Math.ceil((santJoan.getTime() - ara.getTime()) / msPerDia);

    document.getElementById("comptadorSantJoan").innerHTML =
        `<p><strong>${diesSantJoan}</strong> dies fins a Sant Joan ☀️</p>`;
}

// Executa immediatament i després cada segon
setInterval(actualitzaRellotge, 1000);
actualitzaRellotge(); // Crida inicial per mostrar tot al carregar