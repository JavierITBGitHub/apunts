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