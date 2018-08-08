const current = document.querySelector('#current');
// looks in imgs class then gets all img
const imgs = document.querySelectorAll(".imgs img");
const opacity = 0.4;

// set first image opacity
imgs[0].style.opacity = opacity; 

/* could destructure the above into this:
const[current, imgs] = [
    document.querySelector('#current'),
    document.querySelectorAll(".imgs img")
];
*/

// adds event listener so when image is clicked 
// it is set as current
imgs.forEach(img => 
    img.addEventListener('click', imgClick)
);

function imgClick(e){
    // Reset opacity of all images on click
    imgs.forEach(img => (img.style.opacity = 1));

    // change current image to src of clicked image
    current.src = e.target.src;

    // Add fade in class
    current.classList.add('fade-in');

    // set time out and remove the fade in class 500ms
    setTimeout(() => current.classList.remove('fade-in'), 500)

    // change the opacity to opacity var
    e.target.style.opacity = opacity;
}