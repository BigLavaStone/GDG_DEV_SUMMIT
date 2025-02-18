

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const pointsToMeet=30;
const gridSize = 20; 
const canvasSize = 400; 
const rows = canvasSize / gridSize;
const columns = canvasSize / gridSize;

let snake = [
  { x: 5 * gridSize, y: 5 * gridSize },
  { x: 4 * gridSize, y: 5 * gridSize },
  { x: 3 * gridSize, y: 5 * gridSize }
];

let direction = "RIGHT";
let food = null;
let score = 0;
let foodEaten = 0;
let points = 5; 
let gameInterval = null;
let isGameRunning = false; 

const hint = document.getElementById("hint");
const scoreElement = document.getElementById("score");
const Scorestatus=document.getElementById('scoreStatus');

const randomPosition = () => {
  return {
    x: Math.floor(Math.random() * columns) * gridSize,
    y: Math.floor(Math.random() * rows) * gridSize
  };
};

const updateScore = () => {
  scoreElement.innerText = `Score: ${score}`;
};

const generateFood = () => {
  food = randomPosition();
};

const gameLoop = () => {
  if (foodEaten === points) {
    hint.classList.remove("hidden");
  }

  
  const head = { ...snake[0] };

  if (direction === "UP") head.y -= gridSize;
  if (direction === "DOWN") head.y += gridSize;
  if (direction === "LEFT") head.x -= gridSize;
  if (direction === "RIGHT") head.x += gridSize;

  
  if (
    head.x < 0 || head.x >= canvasSize || head.y < 0 || head.y >= canvasSize ||
    snake.some(segment => segment.x === head.x && segment.y === head.y)
  ) {
    return resetGame();
  }

 
  snake.unshift(head);

 
  if (head.x === food.x && head.y === food.y) {
    score += 10;
    foodEaten++;
    generateFood(); 
  } else {
    snake.pop(); 
  }


  ctx.clearRect(0, 0, canvas.width, canvas.height);

  
  snake.forEach(segment => {
    ctx.fillStyle = "green";
    ctx.fillRect(segment.x, segment.y, gridSize, gridSize);
  });

 
  ctx.fillStyle = "red";
  ctx.fillRect(food.x, food.y, gridSize, gridSize);

  updateScore();
};

const resetGame = () => {
  snake = [
    { x: 5 * gridSize, y: 5 * gridSize },
    { x: 4 * gridSize, y: 5 * gridSize },
    { x: 3 * gridSize, y: 5 * gridSize }
  ];
  direction = "RIGHT";
  score = 0;
  foodEaten = 0;
  hint.classList.add("hidden");
  generateFood();
  updateScore();
};

const changeDirection = (event) => {
  if (event.key === "ArrowUp" && direction !== "DOWN") direction = "UP";
  if (event.key === "ArrowDown" && direction !== "UP") direction = "DOWN";
  if (event.key === "ArrowLeft" && direction !== "RIGHT") direction = "LEFT";
  if (event.key === "ArrowRight" && direction !== "LEFT") direction = "RIGHT";
};


const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const restartButton = document.getElementById("restartButton");


const startGame = () => {
  Scorestatus.innerHTML="";
  if (!isGameRunning) {
    generateFood();
    gameInterval = setInterval(gameLoop, 150) 
    isGameRunning = true;
    hint.classList.add("hidden"); 
  }
};


const stopGame = () => {
    
  if (isGameRunning) {
    clearInterval(gameInterval);
    isGameRunning = false;
    if(score===pointsToMeet) Scorestatus.innerHTML="you meet the score"
    else if(score>pointsToMeet) Scorestatus.innerHTML="try for less score"
    else Scorestatus.innerHTML="try for  more score";
  }
  if(score===pointsToMeet) {
    hint.classList.remove("hidden");
    canvas.classList.add('hidden');
    console.log('check in apis for next clue')
    getApis();
  }
};


const restartGame = () => {
  resetGame();
  startGame(); 
};

const getApis=()=>{
fetch('http://localhost:3000').then((msg)=>console.log(msg)).catch(e=>console.log(e))
}

startButton.addEventListener("click", startGame);
stopButton.addEventListener("click", stopGame);
restartButton.addEventListener("click", restartGame);

document.addEventListener("keydown", changeDirection);