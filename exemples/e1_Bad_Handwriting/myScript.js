const seed = 12;
const text = 'Hola Bitxos. Quina web tan xula ;-) He fet en un moment, mirant CODEPEN.IO';

function seededRandom(seed) {
  let x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}

function wrapLetters(str, element, seed = 1) {
  const fonts = [
    'caveat',
    'cedarville-cursive',
    'indie-flower',
    'nothing-you-could-do',
    'oooh-baby',
    'reenie-beanie',
    'shadows-into-light'
  ];

  const blacklist = {
    l: ['cedarville-cursive', 'oooh-baby', 'nothing-you-could-do']
  };

  const lastUsed = {};
  element.innerHTML = '';

  let currentSeed = seed;

  for (const char of str) {
    const lowerChar = char.toLowerCase();
    let availableFonts = fonts;

    if (blacklist[lowerChar]) {
      availableFonts = fonts.filter(f => !blacklist[lowerChar].includes(f));
    }

    if (lastUsed[lowerChar]) {
      availableFonts = availableFonts.filter(f => f !== lastUsed[lowerChar]);
    }

    const fontIndex = Math.floor(seededRandom(currentSeed) * availableFonts.length);
    const font = availableFonts[fontIndex] || fonts[0];
    lastUsed[lowerChar] = font;

    const span = document.createElement('span');
    span.className = font;
    span.textContent = char;
    element.appendChild(span);

    currentSeed++;
  }
}

const p = document.querySelector('p');
wrapLetters(text, p, seed);