/////////////////////////////sidebar
const sidebarMenu = document.getElementById("sidebar-container");
function togglemenu() {
  sidebarMenu.innerHTML = `<div class="sidebar">
  <div class="sidebar-wrapper">
      <img src="./assets/svg/close.svg" onclick="closebtn()" class="closebtn" id="close"/>

  <div class="mobile-size-cont">
  <div>
      <img src="./assets/svg/close.svg" onclick="closebtn()" class="closebtn" />
                <img
              src="./assets/svg/search2.svg"
              onclick="toggleSearch()"
              id="toggleSearch"
            /></div>
        <a href="http://127.0.0.1:5500/index.html">

  <img src="./assets/image/GodenBusinessMagazine_LOGOOK (1) 1 (1).png" class="mobile-size-logo"/></a>
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
          <img src="./assets/svg/telephone.svg" class="social" />
        <a href="https://www.instagram.com/goldenbusinessmagazine/">
          <img src="./assets/svg/instagram.svg" class="social" />
        </a>
        <a
          href="https://www.linkedin.com/company/goldenbusinessmagazine/?originalSubdomain=ir"
          ><img src="./assets/svg/linkedin.svg" class="social" />
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

//////////////////////(/////////modal
const modal = document.getElementById("modal-wrapper");
function profiletoggle() {
  modal.innerHTML = `
  <div class="modal">     
  <i class="bi bi-x-lg" onclick="closebtn2()"></i>
  <div class="modal-container">
          <div>
            <img src="../assets/image/Frame 15884.png" />
          </div>
          <div class="name">
            <div class="name-cont">
              <p>مدیرعامل و سردبیر</p>
              <h4>مهندس شاهرخ کشاورز</h4>
            </div>
            <p>Engineer Shahrukh Keshavarz</p>
          </div>
        </div>
        <p class="description">
          ۱۶ آذر ۱۴۰۰ برابر با ۷ دسامبر ۲۰۲۱ مهندس شاهرخ کشاورز نماینده انجمن
          مراکز خرید خاورمیانه و شمال افریقا، جایزه نفر دوم، بیست‌وهفتمین کنگره
          سالانه مراکز خرید خاورمیانه (Retail Congress MENA) را کسب کرد. به
          گزارش ایسنا بنابر اعلام بیمه تایم، در این مراسم که توسط انجمن مراکز
          خرید و خرده‌فروشی خاورمیانه و با مشارکت اتاق بازرگانی دبی سازماندهی
          شد، متخصصان خرده فروشی در سراسر جهان در واقع در یک کنفرانس، نمایشگاه و
          معامله حضور یافتند. ‎این کنگره سالانه مراکز خرید و خرده فروشی و مراسم
          اهدای جوایز ۶ و 7 دسامبر امسال مصادف با 15 و 16 آذرماه سال جاری در هتل
          «ریتز کارلتون» دوبی و در دل «اکسپوی دوبی» برگزار شد. رویکردها ‎در بیست
          وهفتمین سال برگزاری مراسم مورد اشاره، رویکردهای جدید صنعت خرده‌فروشی
          هم مورد بررسی قرار گرفت. در این مراسم روند خرده‌فروشی دنیا پس از شیوع
          کرونا به بحث و گفت وگو گذاشته شد و ضمن بررسی رویکرد آنلاین، خرده‌فروشی
          آفلاین هم به شکل ویژه‌ای مورد توجه قرار گرفت؛ ضمن اینکه تکنولوژی‌های
          جدید در زمینه خرده‌فروشی و همچنین تحولات اخیرهم از دیگر مباحث این
          مراسم 2 روزه بود. ‎افتخاری برای خرده‌فروشی ایران ‎اما نکته حائز اهمیت
          در این دوره از مراسم، کاندیدا شدن مهندس شاهرخ کشاورز، صاحب امتیاز و
          مدیرمسئول ماهنامه «تجارت طلایی» و نماینده رسمی انجمن مراکز خرید
          خاورمیانه و شمال آفریقا در ایران و رقابتش با 2 کاندیدای دیگر از
          کشورهای حوزه خلیج فارس (عربستان سعودی و امارات متحده عربی) بود.
          تلاش‌ها و نقش موثر او در صنعت خرده‌فروشی منجر به کاندیدا شدنش در مورد
          جایزه مرد سال خرده‌فروشی خاورمیانه (جایزه سال خرده‌فروشی) شد. رقبای
          مهندس کشاورز، محمد المزروئی، مدیر اماراتی مجموعه «دلما مال» و ماجد
          القطمی، مدیر مجموعه «آزاد» از کشور عربستان سعودی نام داشتند.
          فعالیت‌های موثر مهندس کشاورز علاوه بر فعالیت گسترده در صنعت خرده‌فروشی
          و مراکز خرید کشور، عمل به مسئولیت‌های اجتماعی در قالب رسانه‌ای که
          مسئولیت آن را برعهده دارد را در مرکز توجهش قرار داده و بر همین اساس
          حامی و برگزارکننده رویدادهای گوناگونی در مسیر کمک به تاب‌آوری سازمانی
          و البته هموارسازی چالش‌های پیش روی فعالان این صنعت نام دارد.  از جمله
          مهم‌ترین اقدامات صورت گرفته از سوی مهندس کشاورز، برپایی پویش ملی حمایت
          مراکزخرید از کسبه و فعالان اقتصادی، همزمان با ورود ویروس کرونا به کشور
          و تحت تاثیر قرار گرفتن صنایع و کسب و کارهای گوناگون بود. این موضوع با
          استقبال گسترده صاحبان بسیاری از مراکز خرید کشور همراه شد و علاوه بر
          رسانه‌های داخلی، بازتاب گسترده‌ای در رسانه‌های خارجی و بین‌المللی هم
          داشت. ‎از دیگر اقدامات مهم مهندس کشاورز، برگزاری نمایشگاه مراکز خرید،
          مجتمع‌های تجاری، رویکردهای نوین صنعت خرده فروشی و صنایع وابسته تحت
          عنوان «نمایشگاه ایران ریتیل شو» بود که طی 3 سال متوالی با حضور بسیاری
          از فعالان صنعت خرده‌فروشی در محل نمایشگاه‌های بین‌المللی تهران برگزار
          شد و به نوعی به رسمیت شناخته شدن صنعت خرده‌فروشی همچون دیگر صنایع فعال
          در کشور و توجه بیش‌تر مسئولان عالی رتبه کشوری را در پی داشت
        </p>
        </div> `;
  document.body.classList.add("modal-open");
}
function closebtn2() {
  modal.innerHTML = "";
  document.body.classList.remove("modal-open");
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
            src="./assets/svg/close.svg"
            onclick="closebtn3()"
            class="closeBtn"
          />
          <div class="search-input">
            <input type="text" id="searchInput" placeholder="جستجو کنید" />
            <img src="./assets/svg/search.svg" onclick="performSearch()" />
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
//////////////////////////////////
const swiper2 = new Swiper(".mySwiper2", {
  rewind: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
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
const progressRect = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var mySwiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressRect.style.setProperty("--progress", progress);
      progressContent.textContent = "";
    },
  },
});

//////////////////
