# Estructura del Projecte ITB Dashboard

## 📁 Estructura de Directoris

```
itb-dashboard/
│
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── app.js
│   ├── weather.js
│   └── countdown.js
├── images/
│   └── logo-itb.png (afegir el logo oficial)
└── README.md
```

## 📄 Fitxers del Projecte

### 1. index.html
```html
<!DOCTYPE html>
<html lang="ca">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard ITB - Institut Tecnològic de Barcelona</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <!-- Header -->
    <header class="header">
        <div class="logo-container">
            <div class="logo-itb">ITB</div>
        </div>
        <h1 class="main-title">Institut Tecnològic de Barcelona</h1>
        <p class="subtitle">Dashboard de Seguiment</p>
    </header>

    <main class="container">
        <!-- Secció Compte Enrere -->
        <section class="events-section">
            <h2 class="section-title">📅 Esdeveniments</h2>
            
            <div class="cards-grid">
                <!-- Nadal -->
                <div class="card">
                    <canvas id="christmasCanvas" width="200" height="200"></canvas>
                    <h3 class="card-title">Dies fins Nadal</h3>
                    <p class="card-date" id="christmasDate"></p>
                    <p class="card-countdown" id="christmasDays"></p>
                </div>

                <!-- Sant Joan -->
                <div class="card">
                    <canvas id="santjoanCanvas" width="200" height="200"></canvas>
                    <h3 class="card-title">Dies fins Sant Joan</h3>
                    <p class="card-date" id="santjoanDate"></p>
                    <p class="card-countdown" id="santjoanDays"></p>
                </div>
            </div>
        </section>

        <!-- Secció Meteorologia -->
        <section class="weather-section">
            <h2 class="section-title">🌤️ Meteorologia Barcelona</h2>
            
            <div id="weatherLoading" class="loading">
                <p>Carregant dades meteorològiques...</p>
            </div>

            <div id="weatherError" class="error hidden">
                <p>Error carregant dades meteorològiques</p>
            </div>

            <div id="weatherContent" class="cards-grid hidden">
                <!-- Temperatura Actual -->
                <div class="card">
                    <canvas id="tempCurrentCanvas" width="200" height="200"></canvas>
                    <h3 class="card-title">Temperatura Actual</h3>
                    <p class="card-info">Ara mateix</p>
                    <p class="card-source">Font: Open-Meteo</p>
                </div>

                <!-- Temperatura Mínima -->
                <div class="card">
                    <canvas id="tempMinCanvas" width="200" height="200"></canvas>
                    <h3 class="card-title">Temperatura Mínima</h3>
                    <p class="card-info">Avui</p>
                    <p class="card-source">Previsió diària</p>
                </div>

                <!-- Temperatura Màxima -->
                <div class="card">
                    <canvas id="tempMaxCanvas" width="200" height="200"></canvas>
                    <h3 class="card-title">Temperatura Màxima</h3>
                    <p class="card-info">Avui</p>
                    <p class="card-source">Previsió diària</p>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer class="footer">
        <p id="currentTime"></p>
        <p class="footer-source">Dades meteorològiques proporcionades per Open-Meteo API</p>
    </footer>

    <!-- Scripts -->
    <script src="js/countdown.js"></script>
    <script src="js/weather.js"></script>
    <script src="js/app.js"></script>
</body>
</html>
```

### 2. css/styles.css
```css
/* Variables de colors ITB */
:root {
    --itb-primary: #0066CC;
    --itb-secondary: #00A3E0;
    --itb-accent: #FF6600;
    --itb-dark: #1a1a1a;
    --itb-light: #f5f5f5;
    --itb-white: #ffffff;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
    min-height: 100vh;
    padding: 2rem;
    color: var(--itb-dark);
}

/* Header */
.header {
    text-align: center;
    margin-bottom: 3rem;
}

.logo-container {
    display: flex;
    justify-content: center;
    margin-bottom: 1.5rem;
}

.logo-itb {
    background: linear-gradient(135deg, var(--itb-primary) 0%, var(--itb-secondary) 100%);
    color: white;
    font-size: 3rem;
    font-weight: bold;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    box-shadow: 0 10px 25px rgba(0, 102, 204, 0.3);
    transition: transform 0.3s ease;
}

.logo-itb:hover {
    transform: scale(1.05);
}

.main-title {
    font-size: 2.5rem;
    font-weight: bold;
    color: var(--itb-dark);
    margin-bottom: 0.5rem;
}

.subtitle {
    font-size: 1.25rem;
    color: #666;
}

/* Container */
.container {
    max-width: 1400px;
    margin: 0 auto;
}

/* Seccions */
.events-section,
.weather-section {
    margin-bottom: 3rem;
}

.section-title {
    background-color: var(--itb-primary);
    color: white;
    font-size: 1.875rem;
    font-weight: bold;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    display: inline-block;
    margin-bottom: 1.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Grid de targetes */
.cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 1.5rem;
}

/* Targetes */
.card {
    background: white;
    border-radius: 1rem;
    padding: 2rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.card canvas {
    margin: 0 auto 1rem;
    display: block;
}

.card-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--itb-dark);
    margin-bottom: 0.5rem;
}

.card-date {
    color: #666;
    margin-bottom: 0.5rem;
}

.card-countdown {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--itb-accent);
    margin-top: 0.5rem;
}

.card-info {
    color: #666;
    margin-top: 1rem;
}

.card-source {
    font-size: 0.875rem;
    color: #999;
    margin-top: 0.5rem;
}

/* Loading i Error */
.loading,
.error {
    background: white;
    border-radius: 1rem;
    padding: 3rem;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.loading p {
    font-size: 1.5rem;
    color: #666;
}

.error p {
    font-size: 1.25rem;
    color: #e74c3c;
}

.hidden {
    display: none !important;
}

/* Footer */
.footer {
    margin-top: 3rem;
    text-align: center;
    color: #666;
}

.footer p {
    margin: 0.5rem 0;
}

.footer-source {
    font-size: 0.75rem;
    opacity: 0.75;
}

/* Responsiu */
@media (max-width: 768px) {
    body {
        padding: 1rem;
    }

    .main-title {
        font-size: 1.75rem;
    }

    .subtitle {
        font-size: 1rem;
    }

    .section-title {
        font-size: 1.5rem;
    }

    .cards-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }

    .logo-itb {
        font-size: 2rem;
        padding: 0.75rem 1.5rem;
    }
}
```

### 3. js/countdown.js
```javascript
/**
 * Gestió dels comptes enrere per esdeveniments
 */

class CountdownManager {
    constructor() {
        this.canvases = {
            christmas: document.getElementById('christmasCanvas'),
            santjoan: document.getElementById('santjoanCanvas')
        };
        
        this.colors = {
            christmas: '#FF6600',
            santjoan: '#00A3E0',
            background: '#f5f5f5',
            dark: '#1a1a1a'
        };
    }

    getDaysUntilChristmas() {
        const now = new Date();
        const currentYear = now.getFullYear();
        const christmas = new Date(currentYear, 11, 25);
        
        if (now > christmas) {
            christmas.setFullYear(currentYear + 1);
        }
        
        const diff = christmas - now;
        return Math.ceil(diff / (1000 * 60 * 60 * 24));
    }

    getDaysUntilSantJoan() {
        const now = new Date();
        const currentYear = now.getFullYear();
        const santJoan = new Date(currentYear, 5, 23);
        
        if (now > santJoan) {
            santJoan.setFullYear(currentYear + 1);
        }
        
        const diff = santJoan - now;
        return Math.ceil(diff / (1000 * 60 * 60 * 24));
    }

    drawAnalogClock(canvas, value, maxValue, color) {
        const ctx = canvas.getContext('2d');
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = 80;
        
        // Netejar canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Cercle de fons
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        ctx.strokeStyle = this.colors.background;
        ctx.lineWidth = 8;
        ctx.stroke();
        
        // Arc de progrés
        const percentage = value / maxValue;
        const angle = percentage * 2 * Math.PI - Math.PI / 2;
        
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, -Math.PI / 2, angle);
        ctx.strokeStyle = color;
        ctx.lineWidth = 8;
        ctx.lineCap = 'round';
        ctx.stroke();
        
        // Marcadors cada 90 graus
        [0, 90, 180, 270].forEach(deg => {
            const rad = (deg * Math.PI) / 180;
            const x = centerX + (radius - 15) * Math.cos(rad);
            const y = centerY + (radius - 15) * Math.sin(rad);
            
            ctx.beginPath();
            ctx.arc(x, y, 3, 0, 2 * Math.PI);
            ctx.fillStyle = this.colors.dark;
            ctx.fill();
        });
        
        // Agulla
        const needleAngle = angle;
        const needleLength = radius * 0.7;
        const needleEndX = centerX + needleLength * Math.cos(needleAngle);
        const needleEndY = centerY + needleLength * Math.sin(needleAngle);
        
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(needleEndX, needleEndY);
        ctx.strokeStyle = color;
        ctx.lineWidth = 4;
        ctx.lineCap = 'round';
        ctx.stroke();
        
        // Centre del rellotge
        ctx.beginPath();
        ctx.arc(centerX, centerY, 8, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
        
        // Valor al centre
        ctx.font = 'bold 32px Arial';
        ctx.fillStyle = this.colors.dark;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(Math.round(365 - value), centerX, centerY + 35);
        
        ctx.font = '14px Arial';
        ctx.fillText('dies', centerX, centerY + 55);
    }

    updateChristmasCountdown() {
        const days = this.getDaysUntilChristmas();
        const currentYear = new Date().getFullYear();
        
        document.getElementById('christmasDate').textContent = 
            `25 de desembre de ${currentYear}`;
        document.getElementById('christmasDays').textContent = 
            `${days} dies restants`;
        
        this.drawAnalogClock(
            this.canvases.christmas, 
            365 - days, 
            365, 
            this.colors.christmas
        );
    }

    updateSantJoanCountdown() {
        const days = this.getDaysUntilSantJoan();
        const currentYear = new Date().getFullYear();
        const targetYear = days > 180 ? currentYear + 1 : currentYear;
        
        document.getElementById('santjoanDate').textContent = 
            `23 de juny de ${targetYear}`;
        document.getElementById('santjoanDays').textContent = 
            `${days} dies restants`;
        
        this.drawAnalogClock(
            this.canvases.santjoan, 
            365 - days, 
            365, 
            this.colors.santjoan
        );
    }

    init() {
        this.updateChristmasCountdown();
        this.updateSantJoanCountdown();
        
        // Actualitzar cada hora
        setInterval(() => {
            this.updateChristmasCountdown();
            this.updateSantJoanCountdown();
        }, 3600000);
    }
}
```

### 4. js/weather.js
```javascript
/**
 * Gestió de dades meteorològiques
 */

class WeatherManager {
    constructor() {
        this.apiUrl = 'https://api.open-meteo.com/v1/forecast';
        this.barcelona = {
            lat: 41.3851,
            lon: 2.1734
        };
        
        this.canvases = {
            current: document.getElementById('tempCurrentCanvas'),
            min: document.getElementById('tempMinCanvas'),
            max: document.getElementById('tempMaxCanvas')
        };
        
        this.colors = {
            current: '#0066CC',
            min: '#4A90E2',
            max: '#E74C3C',
            background: '#f5f5f5',
            dark: '#1a1a1a'
        };
        
        this.data = null;
    }

    async fetchWeatherData() {
        try {
            const url = `${this.apiUrl}?latitude=${this.barcelona.lat}&longitude=${this.barcelona.lon}&current=temperature_2m&daily=temperature_2m_max,temperature_2m_min&timezone=Europe/Madrid`;
            
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error('Error en la resposta de l\'API');
            }
            
            this.data = await response.json();
            return this.data;
        } catch (error) {
            console.error('Error obtenint dades meteorològiques:', error);
            throw error;
        }
    }

    drawTemperatureClock(canvas, temperature, maxTemp, color, label) {
        const ctx = canvas.getContext('2d');
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = 80;
        
        // Netejar canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Cercle de fons
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        ctx.strokeStyle = this.colors.background;
        ctx.lineWidth = 8;
        ctx.stroke();
        
        // Arc de progrés
        const percentage = Math.max(0, Math.min(temperature / maxTemp, 1));
        const angle = percentage * 2 * Math.PI - Math.PI / 2;
        
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, -Math.PI / 2, angle);
        ctx.strokeStyle = color;
        ctx.lineWidth = 8;
        ctx.lineCap = 'round';
        ctx.stroke();
        
        // Marcadors cada 90 graus
        [0, 90, 180, 270].forEach(deg => {
            const rad = (deg * Math.PI) / 180;
            const x = centerX + (radius - 15) * Math.cos(rad);
            const y = centerY + (radius - 15) * Math.sin(rad);
            
            ctx.beginPath();
            ctx.arc(x, y, 3, 0, 2 * Math.PI);
            ctx.fillStyle = this.colors.dark;
            ctx.fill();
        });
        
        // Agulla
        const needleAngle = angle;
        const needleLength = radius * 0.7;
        const needleEndX = centerX + needleLength * Math.cos(needleAngle);
        const needleEndY = centerY + needleLength * Math.sin(needleAngle);
        
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(needleEndX, needleEndY);
        ctx.strokeStyle = color;
        ctx.lineWidth = 4;
        ctx.lineCap = 'round';
        ctx.stroke();
        
        // Centre del rellotge
        ctx.beginPath();
        ctx.arc(centerX, centerY, 8, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
        
        // Temperatura al centre
        ctx.font = 'bold 32px Arial';
        ctx.fillStyle = this.colors.dark;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(Math.round(temperature), centerX, centerY + 35);
        
        ctx.font = '14px Arial';
        ctx.fillText('°C', centerX, centerY + 55);
    }

    displayWeatherData() {
        if (!this.data) return;
        
        const tempCurrent = this.data.current?.temperature_2m || 0;
        const tempMin = this.data.daily?.temperature_2m_min[0] || 0;
        const tempMax = this.data.daily?.temperature_2m_max[0] || 0;
        
        this.drawTemperatureClock(
            this.canvases.current,
            tempCurrent,
            50,
            this.colors.current,
            'Actual'
        );
        
        this.drawTemperatureClock(
            this.canvases.min,
            tempMin,
            50,
            this.colors.min,
            'Mínima'
        );
        
        this.drawTemperatureClock(
            this.canvases.max,
            tempMax,
            50,
            this.colors.max,
            'Màxima'
        );
        
        // Mostrar contingut i amagar loading
        document.getElementById('weatherLoading').classList.add('hidden');
        document.getElementById('weatherContent').classList.remove('hidden');
    }

    showError() {
        document.getElementById('weatherLoading').classList.add('hidden');
        document.getElementById('weatherError').classList.remove('hidden');
    }

    async init() {
        try {
            await this.fetchWeatherData();
            this.displayWeatherData();
            
            // Actualitzar cada 30 minuts
            setInterval(async () => {
                try {
                    await this.fetchWeatherData();
                    this.displayWeatherData();
                } catch (error) {
                    console.error('Error actualitzant dades:', error);
                }
            }, 1800000);
        } catch (error) {
            this.showError();
        }
    }
}
```

### 5. js/app.js
```javascript
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
```

## 📝 Instruccions d'Ús

1. **Descarrega tots els fitxers** i col·loca'ls en l'estructura de directoris indicada
2. **Afegeix el logo oficial de l'ITB** a la carpeta `images/` amb el nom `logo-itb.png`
3. **Obre `index.html`** en un navegador web modern
4. Les dades meteorològiques s'actualitzen automàticament cada 30 minuts
5. Els comptes enrere s'actualitzen cada hora

## 🔧 Personalització

- **Colors**: Modifica les variables CSS a `:root` a `styles.css`
- **Intervals d'actualització**: Ajusta els `setInterval` a `countdown.js` i `weather.js`
- **Ubicació**: Canvia les coordenades `lat` i `lon` a `weather.js`

## 🌐 Fonts de Dades

- **Meteorologia**: Open-Meteo API (gratuïta, sense clau necessària)
- **Càlculs**: JavaScript natiu per als comptes enrere

## ⚠️ Requisits

- Navegador modern amb suport per Canvas API
- Connexió a Internet per obtenir dades meteorològiques
- JavaScript habilitat
