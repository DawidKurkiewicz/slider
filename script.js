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
const time = 5000;
let active = 0;

const changeSlide = () => {
    active++
    if(active === slideList.length) {
        active = 0;
    }
    image.src = slideList[active].img
    h1.textContent = slideList[active].text
}

setInterval(changeSlide, time)