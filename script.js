const sketch = document.querySelector('.sketch')

const createSquares = _ => {
    for (let i = 0; i < 256; i++) {
        const square = document.createElement('div')
        square.classList.add('square')
        sketch.appendChild(square)
    }
}
createSquares()

let isDrawing = false
sketch.addEventListener('mousedown', e => {
    isDrawing == false ? isDrawing = true : isDrawing = false
})

sketch.addEventListener('touchstart', e => {
    e.preventDefault()
    isDrawing == false ? isDrawing = true : isDrawing = false
    e.target.style.background = 'red'
})

sketch.addEventListener('touchmove', e => {
    e.preventDefault()
    isDrawing == false ? isDrawing = true : isDrawing = false
    e.target.style.background = 'red'
})

const draw = (e) => {
    if (isDrawing === true) {
        e.target.style.background = 'red'
    }
}
sketch.addEventListener('mouseout', draw)

const clearScreenButton = document.querySelector('.cls')

clearScreenButton.addEventListener('click', e => {
    const squares = document.querySelectorAll('.square').forEach(square => {
        square.style.background = 'white'
        isDrawing = false
    })
})