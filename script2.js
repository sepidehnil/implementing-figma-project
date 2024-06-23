window.addEventListener("scroll", function () {
  const header = document.querySelector(".scroll");

  if (window.scrollY > 0) {
    header.classList.add("header-scrolleded");
  } else {
    header.classList.remove("header-scrolleded");
  }
});
/////////////////////////
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
      searchInDocument(document, query, resultsContainer) || resultsFound;

    // Search linked HTML files
    const linkedHtmlFiles = ["../html/aboutus.html", "../html/contactus.html"]; // Add your linked HTML files here
    linkedHtmlFiles.forEach((file) => {
      fetch(file)
        .then((response) => response.text())
        .then((html) => {
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, "text/html");
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
  const paragraphs = doc.querySelectorAll("p");
  let resultsFound = false;
  let count = 0; // To limit the number of results

  paragraphs.forEach((paragraph) => {
    if (count < 3 && paragraph.textContent.toLowerCase().includes(query)) {
      count++;
      const resultDiv = document.createElement("div");
      resultDiv.classList.add("result");

      let snippetText = paragraph.textContent.substring(0, 30);
      if (paragraph.textContent.length > 30) {
        snippetText += "...";
      }

      const snippet = snippetText.replace(
        new RegExp(query, "gi"),
        (match) => `<span class="highlight">${match}</span>`
      );

      resultDiv.innerHTML = `<p>${snippet}</p>`;

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

////////////////////////////////////////sidebar-menu
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
////////////////////////////////image1
const swiper2 = new Swiper(".mySwiper2", {
  rewind: true,
  navigation: {
    nextEl: ".arrow-image1",
    prevEl: ".prevbtn--image1",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
function imageNext() {
  swiper2.slideNext();
}
function imagePrev() {
  swiper2.slidePrev();
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
////////////////////////////////
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

//////////////////////////////////aboutuse-awards
document.addEventListener("DOMContentLoaded", function () {
  swiper = new Swiper(".swiper-btns-awards", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".awards-next",
      prevEl: ".awards-prev",
    },
  });
});

function nextawardClick() {
  console.log("afd");
  swiper.slideNext();
}

function prevawardClick() {
  console.log("ef");
  swiper.slidePrev();
}
