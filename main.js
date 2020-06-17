//Grabbing all slide images
let sliderImages = document.querySelectorAll('.slide');
let arrowLeft = document.querySelector('#arrow-left');
let arrowRight = document.querySelector('#arrow-right');
let current = 0;

//Reset
function reset() {
    for(let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = 'none';
    }
}


//Init slide
function startSlide() {
    reset();
    sliderImages[0].style.display = 'block';
}

//left slide
function leftSlide() {
    reset();
    sliderImages[current - 1].style.display = 'block';
    current--;
}

//Right slide
function rightSlide() {
    reset();
    sliderImages[current + 1].style.display = 'block';
    current++;
}

//Adding eventListener
//eventListener for left click
arrowLeft.addEventListener('click', function() {
    if(current === 0) {
        current = sliderImages.length;
    }
    leftSlide();
})

//eventListener for right click
arrowRight.addEventListener('click', function() {
    if( current === sliderImages.length - 1) {
        current = -1;
    }
    rightSlide();
})

//Main function call
startSlide();