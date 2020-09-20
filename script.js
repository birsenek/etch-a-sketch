const sketch = document.querySelector('.sketch')
let n
const createSquares = _ => {
    for (let i = 0; i < 256; i++) {
        const square = document.createElement('div')
        square.classList.add('square')
        sketch.appendChild(square)
    }
}
createSquares()

//colorir os quadrados quando clicar
let isDrawing = false
sketch.addEventListener('mousedown', e => {
    isDrawing == false ? isDrawing = true : isDrawing = false
})

sketch.addEventListener('touchmove', e => {
    isDrawing = true
    let touch = e.touches[0];
    const square = document.elementFromPoint(touch.clientX, touch.clientY)
    if(touch.clientY > 167 && touch.clientY < 500 && touch.clientX > 6 && touch.clientX < 350) {
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