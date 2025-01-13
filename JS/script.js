// Selecting DOM elements
const menuList = document.querySelectorAll(".list");
const xmarks = document.querySelectorAll(".xmark");
const dropdownMenus = document.querySelectorAll(".dropdown-menu");
const searchBtn = document.querySelector(".search-btn");
const searchBox = document.querySelector(".search-box");
const collapses = document.querySelectorAll(".collapse");
const hamburgerMenu = document.querySelector(".hamburger");
const navigation = document.querySelector(".navigation");
const getInTouch = document.querySelector(".search-contact");

//Hamburger menu functinality for mobile screen
hamburgerMenu.addEventListener("click", (e) => {
  e.preventDefault();
  if (hamburgerMenu.innerHTML === `<i class="fa-solid fa-bars"></i>`) {
    navigation.style.display = "flex";
    getInTouch.style.display = "flex";
    hamburgerMenu.innerHTML = `<i class="fa-solid fa-xmark search-xmark"></i>`;
  } else {
    hamburgerMenu.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    navigation.style.display = "none";
    getInTouch.style.display = "none";
  }
});

//  Dropdown visibility for mobile size
// collapses.forEach((collapse) => {
//   collapse.addEventListener("click", (e) => {
//     e.preventDefault();
//     dropdownMenus.forEach(() => {
//       const dropdownMenu = collapse.querySelector(".dropdown-menu");
//       const btn = collapse.querySelector(".btn");
//       if (dropdownMenu && btn) {
//         const isActive = dropdownMenu.classList.toggle("active");
//         btn.innerHTML = isActive
//           ? `<i class="fa-solid fa-minus"></i>`
//           : `<i class="fa-solid fa-plus"></i>`;
//       }
//     });
//   });
// });

// Event listener for menu items
menuList.forEach((list) => {
  list.addEventListener("click", (e) => {
    e.preventDefault();
    // Close any open dropdowns
    dropdownMenus.forEach((menu) => {
      menu.classList.remove("active");
    });
    // Open the clicked dropdown
    const dropdownMenu = list.querySelector(".dropdown-menu");
    if (dropdownMenu) {
      dropdownMenu.classList.add("active");
    }
  });
});

// Event listener for close buttons in dropdowns
xmarks.forEach((xmark) => {
  xmark.addEventListener("click", (e) => {
    e.preventDefault();
    xmark.parentElement.classList.add("hide");
  });
});

// Search button toggle functionality
searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const innerHTML = `<i class="fa-solid fa-magnifying-glass"></i>`;
  if (searchBtn.innerHTML === innerHTML) {
    searchBox.classList.add("active");
    searchBtn.innerHTML = `<i class="fa-solid fa-xmark search-xmark"></i>`;
  } else {
    searchBox.classList.remove("active");
    searchBtn.innerHTML = innerHTML;
  }
});

let currentIndex = 0;
let autoSlideInterval;

function changeSlide(direction) {
  const imagesContainer = document.querySelector(".images");
  const images = document.querySelectorAll(".images img");
  const totalImages = images.length;

  // Clear existing auto-slide interval
  clearInterval(autoSlideInterval);

  // Update index
  currentIndex += direction;

  // Wrap around if out of bounds
  if (currentIndex < 0) {
    currentIndex = totalImages - 1;
  } else if (currentIndex >= totalImages) {
    currentIndex = 0;
  }

  // Calculate the translate value for partial visibility
  const translateX = -(currentIndex * 50) + 25;

  // Move slider
  imagesContainer.style.transform = `translateX(${translateX}%)`;

  // Restart auto-slide
  startAutoSlide();
}

function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    changeSlide(1);
  }, 5000); // Slide every 5 seconds
}

// Start auto-slide on page load
startAutoSlide();

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
