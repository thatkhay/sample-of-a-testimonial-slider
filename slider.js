const sliderImg = document.querySelector('.sliderImg');
const bio = document.querySelector('.bio');
const bioName = document.querySelector('.bioName');
const slideButton = document.querySelector('.slideButton');

 imgIndex = [];

slideButton.addEventListener('click', slide);

function slide() {
    if (imgIndex === 0) {
        sliderImg.src = './image-tanya.jpg';
        bio.textContent = 'Paragraph 1';
        bioName.textContent = 'Name 1';
        imgIndex = 1;
    } else if (imgIndex === 1) {
        sliderImg.src = './image-john.jpg';
        bio.textContent = 'Paragraph 2';
        bioName.textContent = 'Name 2';
        imgIndex = 0;
    }
}

window.addEventListener('DOMContentLoaded', function() {
    sliderImg.src = './image-john.jpg';
    bio.textContent = 'Paragraph 2';
    bioName.textContent = 'Name 2';
    imgIndex = 0;
});


