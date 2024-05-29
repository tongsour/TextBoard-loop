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


let spaceBetween;

function drawText() {
    // Clear the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Set color
    context.fillStyle = color;

    // Set font size and style
    context.font = `${font_weight} ${fontSize}px ${fontStyle}`;

    // Calculate the width of each character and add spacing
    let currentX = x;
    for (let i = 0; i < userText.length; i++) {
        context.fillText(userText[i], currentX, y);
        currentX += context.measureText(userText[i]).width + spaceBetween;
    }

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
    spaceBetween = parseInt(document.getElementById('spaceBetween').value) || 1;

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

function drawText() {
    // Clear the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Set font properties
    context.font = `${font_weight} ${fontSize}px ${fontStyle}`;

    // Set color
    context.fillStyle = color;

    // Calculate and draw text with spaces
    let currentX = x;
    for (let i = 0; i < userText.length; i++) {
        context.fillText(userText[i], currentX, y);
        currentX += context.measureText(userText[i]).width + spaceBetween;
    }

    // Update position for animation
    const step = speed;
    if (direction === 'right') {
        x += step;
        if (currentX > canvas.width) {
            x = -context.measureText(userText).width - spaceBetween * userText.length;
        }
    } else {
        x -= step;
        if (x < -context.measureText(userText).width - spaceBetween * userText.length) {
            x = canvas.width;
        }
    }

    // Request next animation frame
    animationFrameId = requestAnimationFrame(drawText);
}

function startAnimation() {
    // Get user input values
    userText = document.getElementById('userText').value;
    direction = document.getElementById('direction').value;
    fontSize = parseInt(document.getElementById('fontSize').value, 10);
    color = document.getElementById('color').value;
    fontStyle = document.getElementById('fontStyle').value;
    font_weight = document.getElementById('font_weight').value;
    spaceBetween = parseInt(document.getElementById('spaceBetween').value, 10);
    speed = parseFloat(document.getElementById('speed').value);

    // Initialize position
    if (direction === 'right') {
        x = -context.measureText(userText).width - spaceBetween * userText.length;
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
