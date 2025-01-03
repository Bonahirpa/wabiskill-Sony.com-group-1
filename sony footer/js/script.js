// get all play buttons and images
const playButtons = document.querySelectorAll('.play-button');
const images = document.querySelectorAll('.card img');
const spinner = document.getElementById('loadingSpinner'); 
const lightbox = document.getElementById('lightbox'); 
const iframe = document.getElementById('videoIframe'); 

// Add click event listener to each play button
playButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.stopPropagation(); 
        const videoUrl = this.previousElementSibling.getAttribute('data-video-url'); 
        openVideo(videoUrl); 
    });
});

// Add click event listener to each image to prevent triggering video on click
images.forEach(image => {
    image.addEventListener('click', function(e) {
        e.stopPropagation(); 
    });
});

// Function to open video in a lightbox or iframe
function openVideo(videoUrl) {
    // Display the lightbox and spinner
    lightbox.style.display = 'flex';
    spinner.style.display = 'block'; 
    iframe.style.display = 'none'; 

    // Set the iframe's src and size
    iframe.src = videoUrl;
    iframe.style.width = '800px';
    iframe.style.height = '500px'; 

    // When iframe finishes loading, hide the spinner and show the video
    iframe.onload = function () {
        spinner.style.display = 'none'; 
        iframe.style.display = 'block'; 
    };
}


document.getElementById('closeLightbox').addEventListener('click', function() {
   
    iframe.src = '';
    iframe.style.display = 'none'; 
    spinner.style.display = 'none';
    lightbox.style.display = 'none'; 
});
