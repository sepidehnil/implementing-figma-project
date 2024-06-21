const video = document.getElementById("myVideo");
const playVideoButton = document.querySelector(".palyVideo");

function playpause() {
  if (video.paused) {
    video.play();
    playVideoButton.innerHTML = `<span>توقف ویدیو</span><i class="bi bi-pause"></i>`;
  } else {
    video.pause();
    playVideoButton.innerHTML = `<span>نمایش ویدیو</span><i class="bi bi-play"></i>`;
  }
}
///////////////////////
const logocontainer = document.querySelector(".logo-container");
function mouseover() {
  logocontainer.style.backgroundColor = "rgba(214, 187, 44, 0.14)";
}
//////////////////////section 7
document.addEventListener("DOMContentLoaded", function () {
  const certificateNumbers = document.querySelectorAll(
    ".certificate-numbers p"
  );
  const certificateImgContainer = document.querySelector(".certificate-img");

  // Initial image URL for 'گواهینامه ۱'
  let currentImgUrl = "../assets/image/cer4.png";

  certificateNumbers.forEach((certificate) => {
    certificate.addEventListener("mouseover", function () {
      const imgUrl = certificate.getAttribute("data-img");

      // Update image only if a different certificate is hovered
      if (imgUrl !== currentImgUrl) {
        certificateImgContainer.innerHTML = `<img src="${imgUrl}" />`;
        currentImgUrl = imgUrl;
      }
    });
  });

  // Handle mouseout on the entire certificate slider
  const certificateSlider = document.querySelector(".certificate-slider");
  certificateSlider.addEventListener("mouseleave", function () {
    // Remove active class and reset to the initial image 'گواهینامه ۱'
    certificateImgContainer.innerHTML = `<img src="${currentImgUrl}" />`;
  });
});
