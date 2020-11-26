import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection } from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid } from './grid.js'

let lastRenderTme = 0;
let gameOver = false;
const gameBoard = document.getElementById('game-board')
const failMessageElement = document.getElementById('failMessage');
const restartButton = document.getElementById('restartButton');
const backButton = document.getElementById('backButton');

restartButton.addEventListener('click', function () {
    window.location = 'index.html';
})

backButton.addEventListener('click', function () {
    window.location = '/index.html';
})

function main(currentTime) {

    if (gameOver) {
        failMessageElement.classList.add('show');
        return
    }
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTme) / 1000
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;
    lastRenderTme = currentTime;
    update();
    draw();
}

window.requestAnimationFrame(main);

function update() {
    updateSnake();
    updateFood();
    checkDeath();
}

function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}