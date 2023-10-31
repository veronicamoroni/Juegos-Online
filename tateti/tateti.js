// JavaScript para el juego, debajo de esta línea.
const board = document.getElementById("board");
const playButton = document.getElementById("playButton");
const status = document.getElementById("status");
let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];

function drawBoard() {
  board.innerHTML = "";
  for (let i = 0; i < 9; i++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.textContent = gameBoard[i];
    cell.addEventListener("click", () => cellClicked(i));
    board.appendChild(cell);
  }
}

function cellClicked(index) {
  if (gameBoard[index] === "" && currentPlayer !== "") {
    gameBoard[index] = currentPlayer;
    drawBoard();
    if (checkWin(currentPlayer)) {
      status.textContent = `¡${currentPlayer} ha ganado!`;
      markWinningCells(getWinningCombination(gameBoard, currentPlayer));
      currentPlayer = "";
    } else if (gameBoard.every((cell) => cell !== "")) {
      status.textContent = "¡Empate!";
      currentPlayer = "";
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      status.textContent = `Turno de ${currentPlayer}`;
    }
  }
}

function checkWin(player) {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  return winningCombinations.some((combination) =>
    combination.every((index) => gameBoard[index] === player)
  );
}

function getWinningCombination(board, player) {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const combination of winningCombinations) {
    if (combination.every((index) => board[index] === player)) {
      return combination;
    }
  }
  return [];
}

function markWinningCells(winningCells) {
  for (const index of winningCells) {
    const cell = document.getElementsByClassName("cell")[index];
    cell.classList.add("winner");
  }
}

playButton.addEventListener("click", () => {
  gameBoard = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  drawBoard();
  status.textContent = "Turno de X";
});

drawBoard();
