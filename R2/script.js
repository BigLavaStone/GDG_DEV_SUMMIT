const modal = document.getElementsByClassName('modal')[0];
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const pointsToMeet =1;
const gridSize = 20;
const canvasSize = 400;
const rows = canvasSize / gridSize;
const columns = canvasSize / gridSize;
const controls = document.getElementsByClassName('controls')[0];
const input = document.getElementById('input');
const submit = document.getElementById('btn');
const passed=document.getElementsByClassName('passed')[0];
let apimsg=null;
let snake = [
  { x: 5 * gridSize, y: 5 * gridSize },
  { x: 4 * gridSize, y: 5 * gridSize },
  { x: 3 * gridSize, y: 5 * gridSize }
];

let direction = "RIGHT";
let food = null;
let smallPoint = null;
let score = 0;
let foodEaten = 0;
let points = 5;
let gameInterval = null;
let isGameRunning = false;
let modalInterval = null;  

const hint = document.getElementById("hint");
const scoreElement = document.getElementById("score");
const Scorestatus = document.getElementById('scoreStatus');

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

const generateSmallPoint = () => {
  smallPoint = randomPosition();
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

  if (head.x === smallPoint.x && head.y === smallPoint.y) {
    score += 1;  
    generateSmallPoint();  
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  snake.forEach(segment => {
    ctx.fillStyle = "green";
    ctx.fillRect(segment.x, segment.y, gridSize, gridSize);
  });

  ctx.fillStyle = "red";
  ctx.fillRect(food.x, food.y, gridSize, gridSize);

  ctx.fillStyle = "blue";  
  ctx.fillRect(smallPoint.x, smallPoint.y, gridSize, gridSize);
  
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
  generateSmallPoint();
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
  Scorestatus.innerHTML = "";
  if (!isGameRunning) {
    generateFood();
    generateSmallPoint();
    gameInterval = setInterval(gameLoop, 150);
    isGameRunning = true;
    hint.classList.add("hidden");
  }
};

const showModalAtIntervals = () => {
  modal.classList.remove("hidden");

  
  setTimeout(() => {
    modal.classList.add("hidden");
  }, 2000);
};

const stopGame = () => {
  if (isGameRunning) {
    clearInterval(gameInterval);
    isGameRunning = false;
    if (score === pointsToMeet) Scorestatus.innerHTML = "You met the score!";
    else if (score > pointsToMeet) Scorestatus.innerHTML = "Try for less score!";
    else Scorestatus.innerHTML = "Try for more score!";
  }
  if (score >= pointsToMeet) {
    alert('Hint: check for further hints and clues in console')
    canvas.classList.add('hidden');
    controls.classList.add('hidden');
    console.log('Check APIs for the next clue');
    getApis();
  }
};

submit.addEventListener('click', check);
function check() {
  if (input.value === 'echo' && apimsg!=null ) {
    modalInterval = setInterval(() => {
      showModalAtIntervals();
    }, 1000);  
  }
}

const restartGame = () => {
  resetGame();
  startGame();
};

const getApis = () => {
  fetch('http://localhost:3000')
    .then((msg) => 
      {
        apimsg=msg
        console.log(apimsg);
      })
    .catch((e) => console.log(e));
};


if(!modal.classList.contains('hidden') && modalInterval===null) passed.classList.remove('hidden')

startButton.addEventListener("click", startGame);
stopButton.addEventListener("click", stopGame);
restartButton.addEventListener("click", restartGame);

document.addEventListener("keydown", changeDirection);
