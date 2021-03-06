const slideList = [{
    img: "images/img1.jpg",
    text: "First Slide"
},
{
    img: "images/img2.jpg",
    text: "Second Slide"
},
{
    img: "images/img3.jpg",
    text: "Third Slide"
}];

const image = document.querySelector("img.slider")
const h1 = document.querySelector("h1.slider")
const dots = [...document.querySelectorAll(".dots span")]
const time = 5000;
let active = 0;

const changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains("active"));
    dots[activeDot].classList.remove("active")
    dots[active].classList.add("active")
}

const changeSlide = () => {
    active++
    if (active === slideList.length) {
        active = 0;
    }
    image.src = slideList[active].img
    h1.textContent = slideList[active].text
    changeDot()
}

const first = () => {
    clearInterval(indexInterval)
    active = 0;
    image.src = slideList[active].img
    h1.textContent = slideList[active].text
    changeDot()
    indexInterval = setInterval(changeSlide, time)
}
const second = () => {
    clearInterval(indexInterval)
    active = 1;
    image.src = slideList[active].img
    h1.textContent = slideList[active].text
    changeDot()
    indexInterval = setInterval(changeSlide, time)
}
const third = () => {
    clearInterval(indexInterval)
    active = 2;
    image.src = slideList[active].img
    h1.textContent = slideList[active].text
    changeDot()
    indexInterval = setInterval(changeSlide, time)
}
document.getElementById("one").addEventListener("click", first)
document.getElementById("two").addEventListener("click", second)
document.getElementById("three").addEventListener("click", third)

let indexInterval = setInterval(changeSlide, time)

const keyChange = (e) => {
    if (e.keyCode == 37 || e.keyCode == 39) {
        clearInterval(indexInterval)
        e.keyCode == 37 ? active-- : active++
        if (active === slideList.length) {
            active = 0;
        } else if (active < 0) {
            active = slideList.length - 1
        }
        image.src = slideList[active].img
        h1.textContent = slideList[active].text
        changeDot()
        indexInterval = setInterval(changeSlide, time)
    }
}

window.addEventListener("keydown", keyChange)
