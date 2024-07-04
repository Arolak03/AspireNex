// script.js

let board;
let currentPlayer;
let gameActive;

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function initializeGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameActive = true;
    document.getElementById('message').innerText = `Player ${currentPlayer}'s turn`;
    document.querySelectorAll('.cell').forEach(cell => {
        cell.innerText = '';
    });
}

function makeMove(index) {
    if (gameActive && board[index] === '' && currentPlayer === 'X') {
        board[index] = currentPlayer;
        document.getElementById(`cell${index}`).innerText = currentPlayer;
        if (checkWin(currentPlayer)) {
            document.getElementById('message').innerText = `Player ${currentPlayer} wins!`;
            gameActive = false;
        } else if (board.every(cell => cell !== '')) {
            document.getElementById('message').innerText = 'It\'s a draw!';
            gameActive = false;
        } else {
            currentPlayer = 'O';
            document.getElementById('message').innerText = `Player ${currentPlayer}'s turn`;
            setTimeout(aiMove, 500);
        }
    }
}

function aiMove() {
    if (!gameActive) return;

    let bestScore = -Infinity;
    let bestMove;
    for (let i = 0; i < board.length; i++) {
        if (board[i] === '') {
            board[i] = currentPlayer;
            let score = minimax(board, 0, false);
            board[i] = '';
            if (score > bestScore) {
                bestScore = score;
                bestMove = i;
            }
        }
    }
    board[bestMove] = currentPlayer;
    document.getElementById(`cell${bestMove}`).innerText = currentPlayer;

    if (checkWin(currentPlayer)) {
        document.getElementById('message').innerText = `Player ${currentPlayer} wins!`;
        gameActive = false;
    } else if (board.every(cell => cell !== '')) {
        document.getElementById('message').innerText = 'It\'s a draw!';
        gameActive = false;
    } else {
        currentPlayer = 'X';
        document.getElementById('message').innerText = `Player ${currentPlayer}'s turn`;
    }
}

function checkWin(player) {
    for (let condition of winningConditions) {
        const [a, b, c] = condition;
        if (board[a] === player && board[b] === player && board[c] === player) {
            return true;
        }
    }
    return false;
}

function minimax(board, depth, isMaximizing) {
    let scores = {
        'X': -1,
        'O': 1,
        'tie': 0
    };

    let result = checkWinner();
    if (result !== null) {
        return scores[result];
    }

    if (isMaximizing) {
        let bestScore = -Infinity;
        for (let i = 0; i < board.length; i++) {
            if (board[i] === '') {
                board[i] = 'O';
                let score = minimax(board, depth + 1, false);
                board[i] = '';
                bestScore = Math.max(score, bestScore);
            }
        }
        return bestScore;
    } else {
        let bestScore = Infinity;
        for (let i = 0; i < board.length; i++) {
            if (board[i] === '') {
                board[i] = 'X';
                let score = minimax(board, depth + 1, true);
                board[i] = '';
                bestScore = Math.min(score, bestScore);
            }
        }
        return bestScore;
    }
}

function checkWinner() {
    for (let condition of winningConditions) {
        const [a, b, c] = condition;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }
    if (board.every(cell => cell !== '')) {
        return 'tie';
    }
    return null;
}

function resetGame() {
    initializeGame();
}

document.addEventListener('DOMContentLoaded', initializeGame);
