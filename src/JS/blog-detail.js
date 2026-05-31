const manu = document.querySelector('.btn-listNav');
const navs = document.querySelector('.items-link');
const iconList = document.querySelector('.icon-list');
const btnLink = document.querySelectorAll('.nav-link');
const closeIcon = '../src/img/close.svg';
const listIcon = '../src/img/list.webp';

manu.addEventListener('click', () => {
    navs.classList.toggle('disf-nav');
    if (navs.classList.contains('disf-nav')) {
        iconList.src = closeIcon;
    } else {
        iconList.src = listIcon;
    }
});

const params = new URLSearchParams(window.location.search);
const pageBlogId = parseInt(params.get("id"));

const pageBlog = [
    {
        id: 1,
        nameBlog: "لامبورگینی هوراکان پرفورمانته اسپایدر",
        date: "یکشنبه 20 اردیبهشت 1405 18:00",
        readingTime: "'5",
        description1: "لامبورگینی هوراکان پرفورمانته اسپایدر یکی از هیجان انگیز ترین سوپر اسپرت های روباز دنیاست که ترکیبی از طراحی خشن ایتالیایی ، آیرودینامیک پیشرفته و عملکرد فوق العاده را ارائه می دهد.",
        description2: "این خودرو برای کسانی ساخته شده که فقط به رانندگی عادی راضی نمی شوند و به دنبال تجربه ای خالص ، سریع و متفاوت هستند هوراکان پرفومانتهاسپایدر با ظاهر تهاجمی و صدای موتور 10 سیلندر ، توجه هر علاقه مند به خودرو های خاص را جلب می کند.",
        description3: "این خودرو مجهز به پیشرانه 10 سیلندر 5.2 لیتری تنفس طبیعی است که قدرتی حدود 640 اسب بخار و گشتاوری حدود 600 نیوتن متر را می دهد ",
        description4: "این خودرو دارای گیربکس 7 سرعته دو کلاچه است و شتاب صفز تا صد آن حدود 3.1 ثانیه است و حداکثر سرعت آن حدود 325 کیلومتر بر ساعت است ",
        description5: "نوع بدنه این خودرو از نوع اسپایدر (کانورتیبل) است و سیستم انتقال قدرت آن چهارچرخ محرک  است .",
        imgBlog1:"../src/img/huracan-performante-spyder.webp",
        imgBlog2:"../src/img/Lamborghini-Huracan_Performante_Spyder2.webp",
        imgBlog3:"../src/img/Lamborghini-Huracan_Performante_Spyder3.webp",
        imgBlog4:"../src/img/Lamborghini-Huracan_Performante_Spyder1.webp",
    },
    {
        id: 2,
        nameBlog: "نکات مهم نگهداری خودرو برای افزایش عمر و عملکرد بهتر",
        date: "یکشنبه 20 اردیبهشت 1405 18:00",
        readingTime: "'5",
        description1: "نگهداری صحیح خودرو یکی از مهم ترین مارهایی است که می تواند از هزینه های سنگین تعمیرات جلوگیری کند و عمر مفید خودرو را افزایش دهد. بسیاری از مشکلات فنی زمانی ایجاد می شوند که سرویس های دوره ای به موقع انجام نشده اند یا علائم اولیه ی خرابی نادیده گرفته شده اند.",
        description2: "یکی از مهم ترین نکات ، بررسی منظم روغن ، آب رادیاتور و سطح مایعات خودرو است. کم بودن هر کدام از این موارد می تواند باعث آسیب جدی به موتور یا سیستم خنک کننده شود.",
        description3: "همچنین باید فشار باد لاستیک ها را به صورت دوره ای بررسی کنید . چون تنظیم نبودن باد لاستیک هم مصرف سوخت را افزایش می دهد و هم روی کنترل خودرو تاثیر می گذارد.",
        description4: "از دیگر موارد مهم، تعویض به موقع فیلتر هوا، فیلتر روغن و لنت ترمز است. این قطعات نقش مهمی در عملکرد ایمن و روان خودرو دارند و بی توجهی به آن ها می تواند باعث افت کارایی یا خرابی گسترده تر شوند.",
        description5: "همچنین توصیه می شود خودرو را به صورت منظم برای سرویس دوره ای به تعمیرکار متخصص بسپارید تا مشکلات احتمالی قبل از جدی شدن شناسایی شوند. رعایت این نکات ساده می تواند خودرو همیشه در بهترین وضیعت عملکردی باقی بماند.",
        imgBlog1:"../src/img/service.webp",
        imgBlog2:"../src/img/service2.webp",
        imgBlog3:"../src/img/service3.webp",
        imgBlog4:"../src/img/service4.webp",
    },
    {
        id: 3,
        nameBlog: "راهنمای خرید",
        date: "یکشنبه 20 اردیبهشت 1405 18:00",
        readingTime: "'5",
        description1: "خرید قطعات خودرو همیشه یکی از مهم ترین بخش های نگهداری و تعمیر خودرو است. انتخاب درست یک قطعه می تواند روی عملکرد ، ایمنی و حتی عمر مفید خودرو تاثیر مستقیم بگذارد.",
        description2: "به همین دلیل ، قبل از خرید بهتر است چند نکته مهم را در نظر بگیرید تا هم از نظر کیفیت خیالتان راحت باشد و هم هزینه ی اضافی پرداخت نکنید.",
        description3: "اولین نکته ، سازگاری قطعه با مدل خودرو است. بسیاری از قطعات ظاهر مشابهی دارند ، اما برای هر خودرو طراحی متفاوتی دارند. اگر قطعه با خودرو شما هماهنگ نباشد. ممکن است باعث اختلال در عملکرد یا حتی آسیب بیشتر شود. دومین نکته ، بررسی اصالت کالا است. همیشه سعی کنید از فروشگاه های معتبر خرید کنید و به بسته بندی ، شماره فنی و برند تولید کننده دقت داشته باشید.",
        description4: "نکته بعدی ، توجه به گارانتی و خدمات پس از فروش است. قطعه ای که ضمانت معتبر داشته باشد ، انتخاب مطمئن تری محسوب می شود. همچنین بهتر است پیش از خرید ، نظرات کاربران و توضیحات فنی محصول را مطالعه کنید تا دید دقیق تری نسبت به کیفیت آن داشته باشید.",
        description5: "در AotoMod تلاش کرده ایم مجموعه ای از قطعات خودرو را با اطلاعات کامل، قیمت مناسب و امکان مقایسه در اختیار شما قرار دهیم تا خریدی ساده تر و مطمئن تر داشته باشید.",
        imgBlog1:"../src/img/buying-guide.webp",
        imgBlog2:"../src/img/buying-guide2.webp",
        imgBlog3:"../src/img/buying-guide3.webp",
        imgBlog4:"../src/img/buying-guide4.webp",
    },
    {
        id: 4,
        nameBlog: "فراری لافراری",
        date: "یکشنبه 20 اردیبهشت 1405 18:00",
        readingTime: "'5",
        description1: "فراری لافراری یکی از نمادین ترین و ارزشمند ترین ابر خودرو های تاریخ فراری است که با هدف نمایش نهایت توان مهندسی این برند ساخته شد. این خودرو فقط یک سوپر کار معمولی نیست ، بلکه یک شاهکار هیبریدی است که ترکیبی از موتور بنزینی قدرتمند و فناوری الکترویکی را در بالاترین سطح ارائه می دهد.",
        description2: "طراحی آیرودینامیک ، تولید محدود و عملکرد استثناییباعث شده لافراری به یکی از کمیاب ترین و محبوب ترین خودرو های جهان تبدیل شود. این خودرو دارای موتور 12 سیلندر 6.3 لیتری به همراه موتور الکتریکی که قدرتی حدود 950 اسب بخار با گشتاور بیش از 900 نیوتن متر می دهد.",
        description3: "این خودرو گیربکس 7 سرعته دو کلاچه دارد و شتاب صفر تا صد آن 2.6 ثانیه است و حداکثر سرعت 350 کیلومتر بر ساعت دارد.",
        imgBlog1:"../src/img/ferrari.webp",
        imgBlog2:"../src/img/ferrari 5.webp",
        imgBlog3:"../src/img/ferrari-laferrari 6.webp",
        imgBlog4:"../src/img/Ferrari-LaFerrari.webp",
    },
];

const blogs = pageBlog.find(p => p.id === pageBlogId);

if (pageBlog) {
    document.querySelector(".name-blog").innerText = blogs.nameBlog;
    document.querySelector(".date").innerText = blogs.date;
    document.querySelector(".reading-time").innerText = blogs.readingTime;
    document.querySelector("#description1").innerText = blogs.description1;
    document.querySelector("#description2").innerText = blogs.description2;
    document.querySelector("#description3").innerText = blogs.description3;
    document.querySelector("#description4").innerText = blogs.description4;
    document.querySelector("#description5").innerText = blogs.description5;
    document.querySelector("#img-blog1").src = blogs.imgBlog1;
    document.querySelector("#img-blog2").src = blogs.imgBlog2;
    document.querySelector("#img-blog3").src = blogs.imgBlog3;
    document.querySelector("#img-blog4").src = blogs.imgBlog4;
    document.querySelector("#img-blog5").src = blogs.imgBlog5;
} else {
    document.body.innerHTML = "<h2>صفحه مورد نظر پیدا نشد/h2>"
}
