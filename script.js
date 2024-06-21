/////////////////////////////sidebar
const sidebarMenu = document.getElementById("sidebar-container");
function togglemenu() {
  sidebarMenu.innerHTML = `<div class="sidebar">
  <div class="sidebar-wrapper">
      <img src="../assets/svg/close.svg" onclick="closebtn()" class="closebtn" id="close"/>

  <div class="mobile-size-cont">
  <div>
      <img src="../assets/svg/close.svg" onclick="closebtn()" class="closebtn" />
                <img
              src="../assets/svg/search2.svg"
              onclick="toggleSearch()"
              id="toggleSearch"
            /></div>
        <a href="http://127.0.0.1:5500/index.html">

  <img src="../assets/image/GodenBusinessMagazine_LOGOOK (1) 1 (1).png" class="mobile-size-logo"/></a>
    </div>

    <div class="sidebar-items">
    <a href="../index.html"><p>صفحه نخست</p></a>
      <a href="../html/aboutus.html">
        <p>درباره ما</p>
      </a>
      <p>ایران ریتیل شو</p>
      <p>ایران ریتیل اواردز</p>
      <p>پایگاه خبری</p>
      <a href="../html/contactus.html">
        <p>تماس با ما</p>
      </a>
      <p>ماهنامه تجارت طلایی</p>
    </div>

    <div class="sidebar-links">
      <div class="sidebar-socialmedia">
        <a href="tel:+982166399241">
          <img src="../assets/svg/telephone.svg" class="social" />
        <a href="https://www.instagram.com/goldenbusinessmagazine/">
          <img src="../assets/svg/instagram.svg" class="social" />
        </a>
        <a
          href="https://www.linkedin.com/company/goldenbusinessmagazine/?originalSubdomain=ir"
          ><img src="../assets/svg/linkedin.svg" class="social" />
        </a>
      </div>
      <a href="http://www.gbmnews.ir"> <p>www.gbmnews.ir</p></a>
      <a href="http://www.goldenbusinessmagazine.com">
        <p>www.goldenbusinessmagazine.com</p>
      </a>
      <a href="http://www.iranretailshow.com"> <p>www.iranretailshow.com</p> </a>
    </div>
  </div>
</div>
`;
}
function closebtn() {
  sidebarMenu.innerHTML = "";
}

/////////////////////////////poster
const poster = document.getElementById("poster");
const poster2 = document.getElementById("poster2");
const poster3 = document.getElementById("poster3");

function togglePoster() {
  poster.innerHTML = `
  <img src="/assets/image/2022 6.png" onclick="posterclick()"/>
`;
}
function togglePoster2() {
  poster2.innerHTML = `
  <img src="/assets/image/2022 6.png" onclick="posterclick2()"/>
`;
}
function togglePoster3() {
  poster3.innerHTML = `
  <img src="/assets/image/2022 6.png" onclick="posterclick3()"/>
`;
}
function posterclick() {
  poster.innerHTML = "";
}
function posterclick2() {
  poster2.innerHTML = "";
}
function posterclick3() {
  poster3.innerHTML = "";
}

////////////////////////////////////searchbtn
const searchWrapper = document.querySelector(".search");
function closebtn3() {
  searchWrapper.innerHTML = "";
}
function toggleSearch() {
  searchWrapper.innerHTML = `
    <div class="search-wrapper">
      <div class="search-container">
          <img
            src="../assets/svg/close.svg"
            onclick="closebtn3()"
            class="closeBtn"
          />
          <div class="search-input">
            <input type="text" id="searchInput" placeholder="جستجو کنید" />
            <img src="../assets/svg/search.svg" onclick="performSearch()" />
          </div>

        <div id="searchResults"></div>
      </div>
    </div>`;
}

function performSearch() {
  const query = document.getElementById("searchInput").value.trim();
  const resultsContainer = document.getElementById("searchResults");

  if (query) {
    resultsContainer.innerHTML = ""; // Clear previous results
    let resultsFound = false;

    // Search the current page
    resultsFound =
      searchInDocument(document, query, resultsContainer) || resultsFound; ///if the search result found return true

    // Search linked HTML files
    const linkedHtmlFiles = ["./html/aboutus.html", "./html/contactus.html"]; // Add your linked HTML files here
    linkedHtmlFiles.forEach((file) => {
      fetch(file)
        .then((response) => response.text()) //This converts the response to text (HTML content).
        .then((html) => {
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, "text/html"); //Parses the HTML string into a DOM document, allowing for DOM manipulation and querying.
          console.log(doc);
          resultsFound =
            searchInDocument(doc, query, resultsContainer, file) ||
            resultsFound;
          // If no results found after checking all documents, ensure resultsContainer remains empty
          if (!resultsFound && resultsContainer.innerHTML === "") {
            resultsContainer.innerHTML = `<p class="notfound">با عرض پوزش مطلبی پیدا نشد.<br />واژه دیگری را جستجو نمایید.</p>`; // No results to show
          }
        });
    });
  }
}

function searchInDocument(doc, query, resultsContainer, fileUrl = "") {
  const paragraphs = doc.querySelectorAll("p"); //as an array
  console.log(paragraphs);
  let resultsFound = false;

  paragraphs.forEach((paragraph) => {
    if (paragraph.textContent.toLowerCase().includes(query)) {
      const resultDiv = document.createElement("div");
      resultDiv.classList.add("result");

      const snippet = paragraph.textContent.replace(
        new RegExp(query, "gi"),
        (match) => `<span class="highlight">${match}</span>`
      );
      resultDiv.innerHTML = `<p>${snippet}</p>`;
      console.log(snippet);

      const showMoreLink = document.createElement("a");
      showMoreLink.classList.add("showMoreLink");
      showMoreLink.innerHTML = `
          <div class="more">
            <p>مشاهده</p>
            <div class="circle">
              <div class="dot"></div>
            </div>`;
      showMoreLink.href = "#";
      showMoreLink.addEventListener("click", () => {
        console.log(fileUrl);
        if (fileUrl) {
          window.location.href = `${fileUrl}#${paragraph.id}`;
        } else {
          paragraph.scrollIntoView({ behavior: "smooth" });
        }
      });
      resultDiv.appendChild(showMoreLink);

      resultsContainer.appendChild(resultDiv);
      resultsFound = true;
    }
  });

  return resultsFound;
}

///////////////////////////slider-section3
// const images = [
//   { id: 1, img: "../assets/image/سکشن دوم صفحه نخست-1.jpg" },
//   { id: 2, img: "../assets/image/سکشن دوم صفحه نخست-2.jpg" },
//   { id: 3, img: "../assets/image/سکشن دوم صفحه نخست-3.jpg" },
//   { id: 4, img: "../assets/image/سکشن دوم صفحه نخست-4.jpg" },
//   { id: 5, img: "../assets/image/سکشن دوم صفحه نخست-5.jpg" },
// ];
// const slides = document.querySelector(".swiper-wrapper");
// const imagesHTML = images.map((item) => {
//   return `<img src="./assets/image/${item.img}" />`;
// });

// slides.innerHTML = imagesHTML;

// let swiper;
// document.addEventListener("DOMContentLoaded", function () {
//   swiper = new Swiper(".aboutus-slider", {
//     // Optional parameters
//     slidesPerView: 1,
//     spaceBetween: 30,
//     loop: true,
//     // navigation: {
//     //   nextEl: ".swiper-button-next",
//     //   prevEl: ".swiper-button-prev",
//     // },
//   });
// });

// // Function to handle next button click
// function nextbtn() {
//   console.log("afd");
//   swiper.slideNext();
// }

// // Function to handle previous button
// function prevbtn() {
//   console.log("ef");
//   swiper.slidePrev();
// }

// ///////////////////////////section6
// let mySwiper;

// document.addEventListener("DOMContentLoaded", function () {
//   mySwiper = new Swiper(".swiper-container", {
//     effect: "coverflow",
//     grabCursor: true,
//     centeredSlides: true,
//     slidesPerView: "auto",
//     coverflowEffect: {
//       rotate: 50,
//       stretch: 0,
//       depth: 100,
//       modifier: 1,
//       slideShadows: true,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });
// });

// function next() {
//   mySwiper.slideNext();
// }
// function prev() {
//   mySwiper.slidePrev();
// }

const swiper = new Swiper(".mySwiper", {
  rewind: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
//////////////////////////////////
const swiper5 = new Swiper(".mySwiper5", {
  slidesPerView: 3,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // When the viewport width is >= 0px
    0: {
      slidesPerView: 1,
    },
    // When the viewport width is >= 680px
    680: {
      slidesPerView: 3,
    },
  },
});

/////////////////////////////////
const mySwiper = new Swiper(".swiper-container", {
  loop: true,
  speed: 1000,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 30,
  coverflowEffect: {
    rotate: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/////////////////////
