const sketch = document.querySelector('.sketch')

//set grid size
let gridSize = 16

//create and select Object
const updateGrid = document.querySelector('select')

//update grid to new selection
const changeGrid = (e) => {
    gridSize = document.querySelector('select').value
    resetGrid()
    createSquares()
}

//clear previous grid
const resetGrid = () => {
    while (sketch.hasChildNodes()) {
        sketch.removeChild(sketch.lastChild)
    }
}

//listen to changes in select element
updateGrid.addEventListener('change', changeGrid)

const createSquares = _ => {
    for (let i = 0; i < gridSize*gridSize; i++) {
        const square = document.createElement('div')
        square.classList.add('square')
        if (gridSize == 32) {
            sketch.style.gridTemplateColumns = 'repeat(32, auto)'
        } else if (gridSize == 64) {
            sketch.style.gridTemplateColumns = 'repeat(64, auto)'
        } else {
            sketch.style.gridTemplateColumns = 'repeat(16, auto)'
        }
        sketch.appendChild(square)
    }
}
createSquares()

//colorir os quadrados quando clicar
let isDrawing = false
sketch.addEventListener('mousedown', e => {
    isDrawing == false ? isDrawing = true : isDrawing = false
})

//stop drawing when changing grid
updateGrid.addEventListener('change', e => {
    isDrawing = false 
})

sketch.addEventListener('touchstart', e => {
    isDrawing = true
    let touch = e.touches[0];
    const square = document.elementFromPoint(touch.clientX, touch.clientY)
    if(touch.clientY > 167 && touch.clientY < 550 && touch.clientX > 6 && touch.clientX < 350) {
        const squareColor = document.getElementById('squareColor').value
        square.style.background = squareColor
    }
})

sketch.addEventListener('touchmove', e => {
    isDrawing = true
    let touch = e.touches[0];
    const square = document.elementFromPoint(touch.clientX, touch.clientY)
    if(touch.clientY > 215 && touch.clientY < 550 && touch.clientX > 6 && touch.clientX < 350) {
        const squareColor = document.getElementById('squareColor').value
        square.style.background = squareColor
    }
})

const draw = (e) => {
    if (isDrawing === true) {
        const squareColor = document.getElementById('squareColor').value
        e.target.style.background = squareColor
    }
}
sketch.addEventListener('mousemove', draw)

const clearScreenButton = document.querySelector('.cls')

clearScreenButton.addEventListener('click', e => {
    const squares = document.querySelectorAll('.square').forEach(square => {
        square.style.background = 'white'
        isDrawing = false
    })
})

