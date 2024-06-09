/////////////////////////////sidebar
const sidebarMenu = document.getElementById("sidebar-container");
function togglemenu() {
  sidebarMenu.innerHTML = `<div class="sidebar">
        <div class="sidebar-wrapper">
          <i class="bi bi-x-lg" onclick="closebtn()"></i>
          <div class="sidebar-items">
            <p>صفحه نخست</p>
          <a href="../html/aboutus.html">
            <p>درباره ما</p>
          </a>
          <p>ایران ریتیل شو</p>
            <p>ایران ریتیل اواردز</p>
            <p>پایگاه خبری</p>
            <a href="../html/contactus.html">
              <p>تماس با ما</p>
            </a>            <p>ماهنامه تجارت طلایی</p>
          </div>
          <div class="sidebar-socialmedia">
            <i class="bi bi-instagram social"></i>
            <i class="bi bi-linkedin social"></i>
            <i class="bi bi-telephone-fill social"></i>
          </div>
          <div class="sidebar-links">
            <p>www.gbmnews.ir</p>
            <p>www.goldenbusinessmagazine.com</p>
            <p>www.iranretailshow.com</p>
          </div>
        </div>
      </div>`;
  document.body.classList.add("sidebar-open");
}
function closebtn() {
  sidebarMenu.innerHTML = "";
  document.body.classList.remove("sidebar-open");
}

//////////////////////poster
const poster = document.getElementById("poster");
function togglePoster() {
  poster.innerHTML = `<div id="poster">
  <img src="/assets/image/2022 6.png" onclick="posterclick()"/></div>
`;
  document.classList.add("poster-content1");
}
function posterclick() {
  poster.innerHTML = "";
  document.classList.remove("poster-content1");
}

//////////////////////dummydata
// const items = [
//   { id: 1, img: "./assets/image/Rectangle 10 (1).png" },
//   { id: 2, img: "./assets/image/Rectangle 10 (2).png" },
//   { id: 3, img: "./assets/image/Rectangle 10.png" },
//   { id: 4, img: "./assets/image/Rectangle 15.png" },
//   { id: 5, img: "./assets/image/Group 479 (1).png" },
// ];
// const slides = document.getElementById("slides");
// const imagesHTML = items.map((item) => {
//   return `<img src="${item.img}" alt="Image ${item.id}" />`;
// });
// slides.innerHTML = imagesHTML;

//////////////////////(/////////modal
const modal = document.getElementById("modal-wrapper");
function profiletoggle() {
  console.log("fd");
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
