let board;
let boardWidth;
let boardHeight;
let context;

//Bird
let birdWidth;
let birdHeight;
let birdX = 50;
let birdY = boardHeight - birdHeight;
let birdImg;
let birdColor = 'blue';
//class/object for bird
let bird = {
    x : birdX,
    y : birdY,
    width : birdWidth,
    heigh : birdHeight 
}

//create board
window.onload = () => {
    board = document.getElementById("board");
    board.height;
    board.width;
    context = board.getContext("2d");

    birdImg = new Image();
    birdImg.src = `,/assets/sprites/${birdColor}bird-midflap.png`;
}
