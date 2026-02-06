document.addEventListener('DOMContentLoaded', () => {
    const h1Element = document.querySelector('h1');
    const text = h1Element.textContent;
    h1Element.innerHTML = ''; // Clear existing text

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    for (let i = 0; i < text.length; i++) {
        const span = document.createElement('span');
        span.textContent = text[i];
        span.style.color = getRandomColor();
        h1Element.appendChild(span);
    }

    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');

    const startBtn = document.getElementById('start');
    const stopBtn = document.getElementById('stop');
    const stepBtn = document.getElementById('step');
    const clearBtn = document.getElementById('clear');
    const randomBtn = document.getElementById('random');
    const gridSizeInput = document.getElementById('gridSize');
    const cellSizeInput = document.getElementById('cellSize');

    let gridSize = parseInt(gridSizeInput.value); // Ensure gridSize is a number
    let cellSize = parseInt(cellSizeInput.value); // Ensure cellSize is a number
    let grid = createGrid(gridSize);
    let animationId = null;

    function createGrid(size) {
        return Array.from({ length: size }, () => Array.from({ length: size }, () => 0));
    }

    function initializeGlider(startRow, startCol) {
        // Glider pattern relative coordinates
        // . # .
        // . . #
        // # # #
        const glider = [
            [0, 1],
            [1, 2],
            [2, 0], [2, 1], [2, 2]
        ];

        glider.forEach(([dr, dc]) => {
            const r = startRow + dr;
            const c = startCol + dc;
            if (r >= 0 && r < gridSize && c >= 0 && c < gridSize) {
                grid[r][c] = 1;
            }
        });
    }

    function drawGrid() {
        canvas.width = gridSize * cellSize;
        canvas.height = gridSize * cellSize;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < gridSize; i++) {
            for (let j = 0; j < gridSize; j++) {
                ctx.fillStyle = grid[i][j] ? 'black' : 'white';
                ctx.fillRect(j * cellSize, i * cellSize, cellSize, cellSize);
                ctx.strokeStyle = '#ccc';
                ctx.strokeRect(j * cellSize, i * cellSize, cellSize, cellSize);
            }
        }
    }

    function updateGrid() {
        const newGrid = createGrid(gridSize);
        for (let i = 0; i < gridSize; i++) {
            for (let j = 0; j < gridSize; j++) {
                const neighbors = countNeighbors(i, j);
                if (grid[i][j] === 1) { // Live cell
                    if (neighbors === 2 || neighbors === 3) {
                        newGrid[i][j] = 1;
                    }
                } else { // Dead cell
                    if (neighbors === 3) {
                        newGrid[i][j] = 1;
                    }
                }
            }
        }
        grid = newGrid;
        drawGrid();
    }

    function countNeighbors(row, col) {
        let count = 0;
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                if (i === 0 && j === 0) continue; // Exclude self
                const r = row + i;
                const c = col + j;
                // Check boundaries to handle edges
                if (r >= 0 && r < gridSize && c >= 0 && c < gridSize) {
                    count += grid[r][c];
                }
            }
        }
        return count;
    }

    function gameLoop() {
        updateGrid();
        animationId = requestAnimationFrame(gameLoop);
    }

    function startGame() {
        if (!animationId) { // Prevent multiple loops
            gameLoop();
        }
    }

    function stopGame() {
        if (animationId) {
            cancelAnimationFrame(animationId);
            animationId = null;
        }
    }
    
    function stepGame() {
        stopGame(); // Stop any ongoing animation first
        updateGrid();
    }

    function clearGrid() {
        stopGame();
        grid = createGrid(gridSize);
        drawGrid();
    }

    function randomGrid() {
        stopGame(); // Stop current animation before generating new random grid
        grid = Array.from({ length: gridSize }, () => Array.from({ length: gridSize }, () => Math.random() > 0.5 ? 1 : 0));
        drawGrid();
    }

    // Event listener for canvas click to toggle cell state
    canvas.addEventListener('click', (event) => {
        stopGame(); // Stop game when manually changing cells
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const col = Math.floor(x / cellSize);
        const row = Math.floor(y / cellSize);

        if (row >= 0 && row < gridSize && col >= 0 && col < gridSize) {
            grid[row][col] = grid[row][col] ? 0 : 1; // Toggle cell state
            drawGrid();
        }
    });
    
    // Event listener for gridSize change
    gridSizeInput.addEventListener('change', () => {
        stopGame(); // Stop game on grid size change
        gridSize = parseInt(gridSizeInput.value);
        grid = createGrid(gridSize);
        // Place glider in a visible spot relative to new grid size
        initializeGlider(1, 1);
        drawGrid();
    });

    // Event listener for cellSize change
    cellSizeInput.addEventListener('change', () => {
        stopGame(); // Stop game on cell size change
        cellSize = parseInt(cellSizeInput.value);
        drawGrid(); // Redraw with new cell size
    });

    // Button event listeners
    startBtn.addEventListener('click', startGame);
    stopBtn.addEventListener('click', stopGame);
    stepBtn.addEventListener('click', stepGame);
    clearBtn.addEventListener('click', clearGrid);
    randomBtn.addEventListener('click', randomGrid);

    // Initial setup: Place glider and auto-start
    initializeGlider(1, 1); // Place a glider at (1,1)
    drawGrid(); // Draw the initial grid with the glider
    startGame(); // Auto-start the game
});