const current = document.querySelector('#current');
// looks in imgs class then gets all .img
const imgs = document.querySelectorAll(".imgs img");

// adds event listener so when image is clicked 
// it is set as current
imgs.forEach(img => 
    img.addEventListener('click', e => (current.src = 
    e.target.src))
);