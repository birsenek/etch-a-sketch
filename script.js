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

sketch.addEventListener('mouseover', e => {
    if (isDrawing === true) {
        e.target.style.background = 'red'
    }    
})
