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