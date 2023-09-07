const container = document.getElementById('container');
const gridSize = document.getElementById('size').onclick = () => {
    resetGrid();
};
const clear = document.getElementById('clear').onclick = () => {
    clearGrid();
};

// Create Grid Function
function createGrid(x) {
    for (let rows = 0; rows < x; rows++) {
        for (let col = 0; col < x; col++) {
            const grid = document.createElement('div');
            grid.classList.add('grid');
            container.appendChild(grid);
            grid.style.cssText = `width: ${500/x}px; height: ${500/x}px`;
            grid.addEventListener('mouseover', color);
        }
        container.style.gridTemplateColumns = `repeat(${x}, auto)`;
    }
}

createGrid(16);

function color(){
    this.style.backgroundColor = 'black';
}

function clearGrid() {
    const grids = document.querySelectorAll('.grid').forEach((grid) => {
        grid.style.backgroundColor = 'white';
    })
}

function resetGrid() {
    let size = prompt('Enter n for your desired nxn grid size (max 100)');
    if (size > 100) size = prompt('Invalid size');
    let grid = container.lastElementChild;
    while (grid) {
        container.removeChild(grid);
        grid = container.lastElementChild;
    }
    createGrid(size);
}