let board;
let boardWidth = 800;
let boardHeight = 660;
let context;


//Bird
let birdWidth = 17;
let birdHeight = 12;
let birdX = 50;
let birdY = boardHeight - birdHeight;
let birdImg;
let birdColor = 'blue';
//class/object for bird
let bird = {
    x : birdX,
    y : birdY,
    width : birdWidth,
    height : birdHeight 
}

let pipeArray = [];
let pipe1Width;
let pipe2Width;
let pipe3Width;

let pipeHeight;
let pipeX;
let pipeY = boardHeight - birdHeight;

let pipe1Img;
let pipe2Img;
let pipe3Img;

//physics
let velocityX = -8;
let velocityY= 0;
let gravity = 0.6;

let gameOver = false;
let score = 0;


//create board
window.onload = function() {
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;
    context = board.getContext("2d");

    birdImg = new Image();
    birdImg.src = `,/assets/sprites/${birdColor}bird-midflap.png`;
    birdImg.onload = () => context.drawImage(birdImg, bird.x, bird.y, bird.width. bird.height);

}

function update() {
}

