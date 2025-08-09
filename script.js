let hourhand = document.querySelector(".handhourhand")
let minhand = document.querySelector(".handminhand")
let sechand = document.querySelector(".handsechand")

function settime() {
    let now =  new Date()

    let hours = now.getHours()
    let hourdegrees = (hours/12)*360 + 90
    hourhand.style.transform = `rotate(${hourdegrees}deg)`

    let min = now.getMinutes()
    let mindegrees = (min/60)*360 + 90
    minhand.style.transform = `rotate(${mindegrees}deg)`

    let sec = now.getSeconds()
    let secdegrees = (sec/60)*360 + 90
    sechand.style.transform = `rotate(${secdegrees}deg)`
}

setInterval(settime, 1000)
settime()