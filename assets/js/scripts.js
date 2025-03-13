// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.custom-navbar');
    
    if (window.scrollY > 0) { // Triggers immediately on scroll
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

let currentVideo = 1;
let videoTimes = { bgVideo1: 0, bgVideo2: 0 };

function switchVideo() {
  const bgVideo1 = document.getElementById('bgVideo1');
  const bgVideo2 = document.getElementById('bgVideo2');

  if (currentVideo === 1) {
    // Store current time of bgVideo1
    videoTimes.bgVideo1 = bgVideo1.currentTime;

    // Show bgVideo2 and hide bgVideo1
    bgVideo2.style.display = 'block';
    bgVideo1.style.display = 'none';

    // Set bgVideo2 to previously stored time and play
    bgVideo2.currentTime = videoTimes.bgVideo2;
    bgVideo2.play();

    currentVideo = 2;
  } else {
    // Store current time of bgVideo2
    videoTimes.bgVideo2 = bgVideo2.currentTime;

    // Show bgVideo1 and hide bgVideo2
    bgVideo1.style.display = 'block';
    bgVideo2.style.display = 'none';

    // Set bgVideo1 to previously stored time and play
    bgVideo1.currentTime = videoTimes.bgVideo1;
    bgVideo1.play();

    currentVideo = 1;
  }
}

// Switch videos every x seconds
setInterval(switchVideo, 10000);

// Initial setup
switchVideo(); // Start with bgVideo2 hidden

window.addEventListener('resize', () => {
    const bgVideos = document.querySelectorAll('.bg-video');
    bgVideos.forEach(video => {
      video.style.width = '100%';
      video.style.height = 'calc(100% - 70px)';
    });
  });