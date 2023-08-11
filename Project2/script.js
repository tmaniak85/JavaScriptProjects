const sizeUp = document.querySelector('.sizeUp');
const sizeDown = document.querySelector('.sizeDown');
const color = document.querySelector('.color');
const p = document.querySelector('p');

let fontSize = 36;

const increase = () => {
    fontSize += 5;
    p.style.fontSize = fontSize + 'px';
}

const decrease = () => {
    if (fontSize <= 21) return

    fontSize -= 5;
    p.style.fontSize = fontSize + 'px';
}

const changeTextColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    p.style.color = `rgb(${r},${g},${b})`
}

color.addEventListener('click', changeTextColor);
sizeUp.addEventListener('click', increase);
sizeDown.addEventListener('click', decrease);
