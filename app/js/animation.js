let canvas, context;
let x, y;
let direction;
let userText;
let animationFrameId;
let fontSize, color, fontStyle, font_weight;

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function drawText() {
    // Clear the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Set color
    context.fillStyle = color;

    // Set font size and style
    context.font = `${fontSize}px ${fontStyle}`;

    //set font font-weight
    context.fontWeight = `${font_weight}`;

    // Draw the text
    context.fillText(userText, x, y);

    if (direction === 'right') {
        x += 1;
        if (x > canvas.width) {
            x = -context.measureText(userText).width;
        }
    } else {
        x -= 1;
        if (x < -context.measureText(userText).width) {
            x = canvas.width;
        }
    }

    animationFrameId = requestAnimationFrame(drawText);
}

function startAnimation() {
    // Get user input values
    userText = document.getElementById('userText').value;
    direction = document.getElementById('direction').value;
    fontSize = document.getElementById('fontSize').value;
    color = document.getElementById('color').value;
    fontStyle = document.getElementById('fontStyle').value;
    font_weight = document.getElementById('font_weight').value;

    // Initialize position
    if (direction === 'right') {
        x = -context.measureText(userText).width;
    } else {
        x = canvas.width;
    }
    y = canvas.height / 1.2;

    // Cancel any existing animation frames
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
    }

    // Start the animation
    drawText();
}

window.onload = function () {
    canvas = document.getElementById('myCanvas');
    context = canvas.getContext('2d');
}