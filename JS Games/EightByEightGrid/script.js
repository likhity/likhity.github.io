const buttons = document.querySelectorAll('button')

let color = ''

setRandomColor()

document.addEventListener("keydown", e => {
    if (e.key === "r") {
        setRandomColor()
    }
})

buttons.forEach(button => {
    button.style.backgroundColor = "rgb(255,255,255)"
    button.addEventListener('click', e => {
        e.target.style.backgroundColor = color;
        e.target.dataset.previousColor = color;
    })
    button.addEventListener('mouseenter', e => {
        e.target.dataset.previousColor = e.target.style.backgroundColor;
        e.target.style.backgroundColor = color;
    })
    button.addEventListener('mouseleave', e => {
        e.target.style.backgroundColor = e.target.dataset.previousColor;
    })
    button.addEventListener('contextmenu', e => {
        e.preventDefault()
        e.target.style.backgroundColor = 'rgb(255,255,255)'
        e.target.dataset.previousColor = 'rgb(255,255,255)';
    })
})

function setRandomColor() {
    color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
    document.querySelector('.current-color').style.backgroundColor = color
}