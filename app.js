const color = ['#1F6096', '#E65239', '#7F395E', '#C10037', '#70CCD5', '#E677A9'];

let btn = document.getElementById('btn');
btn.addEventListener('click', function() {
    const colorNumber = randomColor();
    document.body.style.backgroundColor = color[colorNumber];

    let colorName = document.getElementById('colorName').innerHTML = color[colorNumber];
})

function randomColor() {
    return Math.floor(Math.random() * color.length)
}