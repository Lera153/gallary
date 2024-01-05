const images = document.querySelectorAll('.image img')

images.forEach(function (img) {

img.onclick = function () {
    document.querySelector('.popup').style.display = 'block'
    document.querySelector('.popup img').src = img.getAttribute('src');
    document.querySelector('.body').style.overflow = 'hidden'
    }
})

document.querySelector('.span').onclick function () {
    document.querySelector('.popup').style.display = 'none';
    document.querySelector('.popup img').src = '';
    document.querySelector('.body').style.overflow = 'auto'
}

const slider_line = document.querySelector('.slider_line');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let offset = 0;

const goNext = function () {
    offset += 350;
    if (offset >= 2100 ) {
        offset = 0
        sliderLine.style.right = 0;
    } else {
        sliderLine.style.right = offset + 'px'
    }
}

nextBtn.onclick = goNext;

prevBtn.onclick = function () {
    offset -= 350;
    if (offset < 2100 ) {
        offset = 1750
        sliderLine.style.right = offset + 'px';
    } else {
        sliderLine.style.right = offset + 'px';
    }
}

setInterval(goNext, 5000)