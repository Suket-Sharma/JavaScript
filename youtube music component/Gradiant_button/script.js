const btns = document.querySelectorAll('.btn');
const body = document.body;

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const color = btn.getAttribute('data-color');
        body.style.backgroundImage = `linear-gradient(to bottom, ${color}, ${adjustColorBrightness(color, 0.1)})`;
    });
});

function adjustColorBrightness(hex, brightness) {
    const rgb = hexToRgb(hex);
    const r = Math.max(0, Math.min(255, rgb[0] + brightness * 255));
    const g = Math.max(0, Math.min(255, rgb[1] + brightness * 255));
    const b = Math.max(0, Math.min(255, rgb[2] + brightness * 255));
    return `rgb(${r}, ${g}, ${b})`;
}

function hexToRgb(hex) {
    const r = parseInt(hex.substring(1, 3), 16);
    const g = parseInt(hex.substring(3, 5), 16);
    const b = parseInt(hex.substring(5, 7), 16);
    return [r, g, b];
}