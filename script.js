// script.js

const canvas = document.getElementById('etch-a-sketch');
const ctx = canvas.getContext('2d');
const resetButton = document.getElementById('reset-button');
const eraserButton = document.getElementById('eraser-button');

let drawing = false;
let erasing = false;

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mousemove', draw);

resetButton.addEventListener('click', resetCanvas);
eraserButton.addEventListener('click', toggleEraser);

function startDrawing(event) {
    drawing = true;
    draw(event);
}

function stopDrawing() {
    drawing = false;
    ctx.beginPath(); // reset the path to prevent drawing a line from the last point
}

function draw(event) {
    if (!drawing) return;
    
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.strokeStyle = erasing ? '#fff' : '#333';
    
    ctx.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
}

function resetCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function toggleEraser() {
    erasing = ! erasing;
    eraserButton.textContent = erasing ? 'Draw' : 'Eraser';
}
