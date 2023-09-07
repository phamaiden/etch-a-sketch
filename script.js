const container = document.getElementById('container');

function createGrid(x) {
    for (let rows = 0; rows < x; rows++) {
        for (let col = 0; col < x; col++) {
            const grid = document.createElement('div');
            grid.classList.add('grid');
            container.appendChild(grid);
        }
    }
    const grids = document.querySelectorAll('.grid').forEach(function(grid){
        grid.style.cssText = `width: ${500/x}px; height: ${500/x}px`;
    });
}

createGrid(16);

const grids = document.querySelectorAll('.grid');
grids.forEach((grid) => grid.addEventListener('mouseover', () => {
    grid.style.backgroundColor = 'black';
}));