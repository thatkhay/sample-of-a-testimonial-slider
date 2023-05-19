const sliderImg = document.querySelector('.sliderImg');
const bio = document.querySelector('.bio');
const bioName = document.querySelector('.bioName');
const slideButton = document.querySelectorAll('.slideButton');

 imgIndex = [];

 slideButton.forEach(button => {
    button.addEventListener('click', slide);
  });
  

function slide() {
    if (imgIndex === 0) {
        sliderImg.src = './image-tanya.jpg';
        bio.textContent = ` “ I’ve been interested in coding for a while but never taken the jump, until now. 
        I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
        excited about the future. ”`;
        bioName.textContent = 'Tanya Sinclair';
        imgIndex = 1;
    } else if (imgIndex === 1) {
        sliderImg.src = './image-john.jpg';
        bio.textContent =`   “ If you want to lay the best foundation possible I’d recommend taking this course. 
        The depth the instructors go into is incredible. I now feel so confident about 
        starting up as a professional developer. ”`;
        bioName.textContent = 'John Tarkpor';
        imgIndex = 0;
    }
}

window.addEventListener('DOMContentLoaded', function() {
    sliderImg.src = './image-john.jpg';
    bio.textContent = `   “ If you want to lay the best foundation possible I’d recommend taking this course. 
    The depth the instructors go into is incredible. I now feel so confident about 
    starting up as a professional developer. ”`;
    bioName.textContent = 'John Tarkpor';
    imgIndex = 0;
});


