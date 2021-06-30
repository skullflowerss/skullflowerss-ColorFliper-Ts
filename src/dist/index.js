const hexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let colorHexMaker;
let colorRgbMaker;
colorHexMaker = () => {
    let hexHash = '#';
    for (let i = 0; i < 6; i++) {
        let hexSelector = hexArr[Math.floor(Math.random() * hexArr.length)];
        hexHash += hexSelector;
    }
    return hexHash;
};
colorRgbMaker = () => {
    let rgb = 'rgb(';
    let r = Math.floor(Math.random() * 256).toString();
    let g = Math.floor(Math.random() * 256).toString();
    let b = Math.floor(Math.random() * 256).toString();
    return `${rgb} ${r}, ${g}, ${b})`;
};
const btn = document.getElementById('btn');
const color = document.querySelector('.color');
let hexMode = true;
btn.addEventListener('click', () => {
    let colorChanger;
    if (hexMode === true) {
        colorChanger = colorHexMaker();
    }
    else {
        colorChanger = colorRgbMaker();
    }
    document.body.style.backgroundColor = colorChanger;
    color.textContent = colorChanger;
});
const rgbBtn = document.querySelector(".rgb-mode");
const hexBtn = document.querySelector(".hex-mode");
rgbBtn.addEventListener('click', () => {
    if (hexMode === true) {
        let colChecker = document.querySelector('.color').innerHTML;
        let hexVal = convertHex(colChecker);
        color.textContent = hexVal;
        hexMode = false;
    }
    else {
        return;
    }
});
function convertHex(hex) {
    hex = hex.replace('#', '');
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);
    let result = 'rgb( ' + r + ', ' + g + ', ' + b + ')';
    return result;
}
console.log(convertHex("#0a3678"));
hexBtn.addEventListener('click', () => {
    if (hexMode === false) {
        let colChecker = document.querySelector('.color').innerHTML;
        let colorArr = colChecker.replace(/[rgb()]/g, "").split(',').map(x => Number(x));
        let rgbVall = rgbToHex(colorArr[0], colorArr[1], colorArr[2]);
        color.textContent = rgbVall;
        hexMode = true;
    }
    else {
        return;
    }
});
function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
function componentToHex(c) {
    let hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
