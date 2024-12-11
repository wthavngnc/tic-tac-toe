let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let playerX = 0;
let playerO = 0;
function change(button, index) {
  if (button.innerText !== "") {
    return;
  }
  button.innerText = currentPlayer;
  gameBoard[index] = currentPlayer;

  if (checkWinner()) {
    setTimeout(() => {
      alert(currentPlayer + " Menang!");
      resetGame();
    }, 100);
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function checkWinner() {
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (
      gameBoard[a] &&
      gameBoard[a] === gameBoard[b] &&
      gameBoard[a] === gameBoard[c]
    ) {
      leader(gameBoard[a]);
      return true;
    }
  }
  return false;
}
function resetGame() {
  gameBoard = ["", "", "", "", "", "", "", "", ""];
  const buttons = document.querySelectorAll(".button");
  buttons.forEach((button) => (button.innerText = ""));
  currentPlayer = "X";
}
function leader(play) {
  if (play === "X") {
    playerX++;
    document.getElementById("scoreX").innerText = playerX;
  } else if (play === "O") {
    playerO++;
    document.getElementById("scoreO").innerText = playerO;
  }
}
