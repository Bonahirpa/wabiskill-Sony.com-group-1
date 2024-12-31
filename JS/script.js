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
