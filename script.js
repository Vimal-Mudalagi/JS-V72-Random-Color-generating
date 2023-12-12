console.log("Script.js initializing")
// let boxes = document.getElementsByClassName("box")
let boxes = document.querySelector(".container").children



function getrandomColor() {
    let val1 = Math.ceil(0 + Math.random() * 255);
    let val2 = Math.ceil(0 + Math.random() * 255);
    let val3 = Math.ceil(0 + Math.random() * 255);
    return `rgb(${val1}, ${val2}, ${val3})`
}
Array.from(boxes).forEach(e => {
    e.style.backgroundColor = getrandomColor()
    e.style.color = getrandomColor()


})

// a + r ( b - a )
// Here r = random number.
// This random number lies between a & b

// 0 + Math.random() *(255-0)
// The random number generated, lies between 0 & 255

// To get an integer
// Math.ceil(0 + Math.random() * 255)