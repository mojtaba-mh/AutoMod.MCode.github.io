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

const products = [
    {
        id: 1,
        nameProduct: "لنت ترمز",
        regularPrice: "1,590,000",
        salePrice: "1,500,000 تومان",
        image: "../src/img/brake-pad-black.webp",
        image2: "../src/img/brake-pad2.webp",
        image3: "../src/img/brake-pad3.webp",
        image4: "../src/img/brake-pad4.webp",
        offProduct: "4%",
        manuFacturerCompany: "شرکت سازنده",
        nameCompany: "کیا",
        productType: "لنت ترمز دیسکی",
        numberOfProduct: "تعداد",
        number: "2 عدد لنت",
        suitableForCars: "مناسب برای خودرو",
        nameSuitableForCar: "ریو ، تیبا",
        locationOfThePiece: "محل قرارگیری",
        location: "چرخ جلو",
        description: ""
    },
    {
        id: 2,
        nameProduct: "شمع خودرو",
        regularPrice: "1,800,000",
        salePrice: "1,728,000 تومان",
        image: "../src/img/spark-plug.webp",
        image2: "../src/img/spark-plug2.webp",
        image3: "../src/img/spark-plug3.webp",
        image4: "../src/img/spark-plug4.webp",
        offProduct: "4%",
        manuFacturerCompany: "شرکت سازنده",
        nameCompany: "دنسو",
        productType: "شمع پایه کوتاه",
        numberOfProduct: "تعداد",
        number: "4 عدد",
        suitableForCars: "مناسب برای خودرو",
        nameSuitableForCar: "تمامی خودرو ها",
        locationOfThePiece: "ویژگی های شمع",
        location: "مکانیسم سرد",
        description: "-"
    },
    {
        id: 3,
        nameProduct: "لاستیک",
        regularPrice: "3,400,000",
        salePrice: "1,728,000 تومان",
        image: "../src/img/tire.webp",
        image2: "../src/img/tire2.webp",
        image3: "../src/img/tire3.webp",
        image4: "../src/img/tire4.webp",
        offProduct: "4%",
        manuFacturerCompany: "شرکت سازنده",
        nameCompany: "صبا",
        productType: "باتری 12 ولت ",
        numberOfProduct: "ظرفیت",
        number: "60 آمپر",
        suitableForCars: "مناسب برای خودرو",
        nameSuitableForCar: "خودرو های سبک",
        locationOfThePiece: "نوع باتری",
        location: "اتمی سیلد",
        description: "-"
    },
    {
        id: 4,
        nameProduct: "باتری 60 آمپری",
        regularPrice: "4,230,000",
        salePrice: "1,728,000 تومان",
        image: "../src/img/batrey.webp",
        image2: "../src/img/batrey2.webp",
        image3: "../src/img/batrey3.webp",
        image4: "../src/img/batrey4.webp",
        offProduct: "10%",
        manuFacturerCompany: "شرکت سازنده",
        nameCompany: "دنسو",
        productType: "شمع پایه کوتاه",
        numberOfProduct: "تعداد",
        number: "4 عدد",
        suitableForCars: "مناسب برای خودرو",
        nameSuitableForCar: "تمامی خودرو ها",
        locationOfThePiece: "ویژگی های شمع",
        location: "مکانیسم سرد",
        description: "-"
    },
    {
        id: 5,
        nameProduct: "سیلندر ترمز",
        regularPrice: "",
        salePrice: "395,000 تومان",
        image: "../src/img/brake-cylinder.webp",
        image2: "../src/img/brake-cylinder2.webp",
        image3: "../src/img/brake-cylinder3.webp",
        image4: "../src/img/brake-cylinder4.webp",
        offProduct: "4%",
        manuFacturerCompany: "شرکت سازنده",
        nameCompany: "دینا پارت",
        productType: "سیلندر ترمز چرخ عقب",
        numberOfProduct: "تعداد",
        number: "1 عدد",
        suitableForCars: "مناسب برای خودرو",
        nameSuitableForCar: "تمامی خودرو ها",
        locationOfThePiece: "محل قرارگیری",
        location: "چرخ عقب",
        description: "-"
    },
    {
        id: 6,
        nameProduct: "میل لنگ",
        regularPrice: "7,500,000",
        salePrice: "1,728,000 تومان",
        image: "../src/img/crankshaft.webp",
        image2: "../src/img/crankshaft2.webp",
        image3: "../src/img/crankshaft3.webp",
        image4: "../src/img/crankshaft4.webp",
        offProduct: "16%",
        manuFacturerCompany: "شرکت سازنده",
        nameCompany: "الدورا",
        productType: "میل لنگ چدنی",
        numberOfProduct: "تعداد",
        number: "1 عدد",
        suitableForCars: "مناسب برای خودرو",
        nameSuitableForCar: "پژو",
        locationOfThePiece: "ویژگی های شمع",
        location: "مکانیسم سرد",
        description: "-"
    },
    {
        id: 7,
        nameProduct: "دیسک ترمز",
        regularPrice: "1,800,000",
        salePrice: "1,728,000 تومان",
        image: "../src/img/brake-rotor.webp",
        image2: "../src/img/brake-rotor2.webp",
        image3: "../src/img/brake-rotor3.webp",
        image4: "../src/img/brake-rotor4.webp",
        offProduct: "16%",
        manuFacturerCompany: "شرکت سازنده",
        nameCompany: "آسمکو",
        productType: "دیسک ترمز جلو",
        numberOfProduct: "تعداد",
        number: "2 عدد",
        suitableForCars: "مناسب برای خودرو",
        nameSuitableForCar: "تمامی خودرو ها",
        locationOfThePiece: "محل قرارگیری",
        location: "چرخ جلو",
        description: "-"
    },
    {
        id: 8,
        nameProduct: "فیلتر هوا",
        regularPrice: "1,800,000",
        salePrice: "1,728,000 تومان",
        image: "../src/img/air-filter.webp",
        image2: "../src/img/air-filter2.webp",
        image3: "../src/img/air-filter3.webp",
        image4: "../src/img/air-filter4.webp",
        offProduct: "16%",
        manuFacturerCompany: "شرکت سازنده",
        nameCompany: "سرکان",
        productType: "فیلتر هوا",
        numberOfProduct: "تعداد",
        number: "1 عدد",
        suitableForCars: "مناسب برای خودرو",
        nameSuitableForCar: "نیسان پاترول",
        locationOfThePiece: "ویژگی های فیلتر",
        location: "دایره ای شکل",
        description: "-"
    },
    {
        id: 9,
        nameProduct: "شاتون",
        regularPrice: "2,300,000",
        salePrice: "1,728,000 تومان",
        image: "../src/img/connecting-rod.webp",
        image2: "../src/img/connecting-rod2.webp",
        image3: "../src/img/connecting-rod3.webp",
        image4: "../src/img/connecting-rod4.webp",
        offProduct: "",
        manuFacturerCompany: "شرکت سازنده",
        nameCompany: "چری",
        productType: "شاتون ام وی ام",
        numberOfProduct: "جنس بدنه",
        number: "فولاد",
        suitableForCars: "مناسب برای خودرو",
        nameSuitableForCar: "MVM 530",
        locationOfThePiece: "اجزای اصلی",
        location: "یاتاقان کوچک و بزرگ و بدنه اصلی",
        description: "-"
    },
    {
        id: 10,
        nameProduct: "بازوی تعلیق",
        regularPrice: "",
        salePrice: "",
        image: "../src/img/control-arm.webp",
        image2: "../src/img/control-arm2.webp",
        image3: "../src/img/control-arm3.webp",
        image4: "../src/img/control-arm4.webp",
        offProduct: "ناموجود",
        manuFacturerCompany: "شرکت سازنده",
        nameCompany: "schmaco",
        productType: "بازوی کنترل",
        numberOfProduct: "تعداد",
        number: "4 عدد",
        suitableForCars: "مناسب برای خودرو",
        nameSuitableForCar: "تمامی خودرو ها",
        locationOfThePiece: "محل قرارگیری",
        location: "محور عقب",
        description: "-"
    },
    {
        id: 11,
        nameProduct: "فیلتر روغن",
        regularPrice: "",
        salePrice: "",
        image: "../src/img/oil-filter.webp",
        image2: "../src/img/oil-filter2.webp",
        image3: "../src/img/oil-filter3.webp",
        image4: "../src/img/oil-filter4.webp",
        offProduct: "ناموجود",
        manuFacturerCompany: "شرکت سازنده",
        nameCompany: "سرکان",
        productType: "فیلتر روغن استوانه ای",
        numberOfProduct: "جنس بدنه",
        number: "فلزی",
        suitableForCars: "مناسب برای خودرو",
        nameSuitableForCar: "پژو",
        locationOfThePiece: "تعداد سوراخ",
        location: "8 سوراخ",
        description: "-"
    },
];

const params = new URLSearchParams(window.location.search);
const productId = parseInt(params.get("id"));

const product = products.find(p => p.id === productId);

if (product) {
    document.querySelector("#nameProduct").innerText = product.nameProduct;
    document.querySelector("#salePrice").innerText = product.salePrice;
    document.querySelector("#description").innerText = product.description;
    document.querySelector("#image").src = product.image;
    document.querySelector("#image2").src = product.image2;
    document.querySelector("#image3").src = product.image3;
    document.querySelector("#image4").src = product.image4;
    document.querySelector("#regularPrice").innerText = product.regularPrice;
    document.querySelector("#offProduct").innerText = product.offProduct;
    document.querySelector("#manuFacturerCompany").innerText = product.manuFacturerCompany;
    document.querySelector("#nameCompany").innerText = product.nameCompany;
    document.querySelector("#productType").innerText = product.productType;
    document.querySelector("#numberOfProduct").innerText = product.numberOfProduct;
    document.querySelector("#number").innerText = product.number;
    document.querySelector("#suitableForCars").innerText = product.suitableForCars;
    document.querySelector("#nameSuitableForCar").innerText = product.nameSuitableForCar;
    document.querySelector("#locationOfThePiece").innerText = product.locationOfThePiece;
    document.querySelector("#location").innerText = product.location;
} else {
    document.body.innerHTML = "<h2>محصول یافت نشد</h2>"
}

const cards = Array.from(document.querySelectorAll(".product-cart"));
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const carousel = document.querySelector('.related-product');

let activeIndex = 0;
const mod = (n, m) => ((n % m) + m) % m;

function clearStates(){
    cards.forEach(card => {
        card.classList.remove('state-center', 'state-mid', 'state-hidden', 'left', 'prev-visible', 'next-visible');
        card.classList.add('state-hidden');
    });
}

function setCard(card, type, isLeft = false){
    card.classList.remove('state-hidden');
    card.classList.add(type);
    if(isLeft) card.classList.add('left');
}

function renderMobile(){
    clearStates();
    const n = cards.length;
    if (!n) return;

    const center = mod(activeIndex, n);
    const mid = mod(activeIndex + 1, n);
    setCard(cards[center], 'state-center');
    setCard(cards[mid], 'state-mid');
}

function renderTablet(){
    clearStates();
    const n = cards.length;
    if(!n)return;

    const center = mod(activeIndex, n);
    const left = mod(activeIndex - 1, n);
    const right = mod(activeIndex + 1 , n);

    setCard(cards[center], 'state-center');
    setCard(cards[left], 'state-mid', true);
    setCard(cards[right], 'state-mid', false);
}

function renderDesktop(){
    clearStates();
    const n = cards.length;
    if(!n)return;

    const active = activeIndex;

    const centerIndex = mod(active, n);
    const left1Index = mod(active - 1 , n);
    const left2Index = mod(active - 2 , n);
    const right1Index = mod(active + 1 , n);
    const right2Index = mod(active + 2 , n);
    
    setCard(cards[centerIndex], 'state-center')
    setCard(cards[left1Index], 'state-mid', true);
    setCard(cards[left2Index], 'prev-visible', true);
    setCard(cards[right1Index], 'state-mid', false);
    setCard(cards[right2Index], 'next-visible', false);
}

function render(){
    const w = window.innerWidth;

    if (w < 768) {
        renderMobile();
    } else if(w < 1200) {
        renderTablet();
    }else{
        renderDesktop();
    }
}

prevBtn?.addEventListener('click', ()=>{
    activeIndex -= 1;
    render();
});

nextBtn?.addEventListener('click', ()=>{
    activeIndex += 1;
    render();
})

let touchStartX = 0;
let touchStartY = 0;
const minSwipeDist = 35;

carousel?.addEventListener('touchstart', (e)=>{
    const t = e.touches[0];
    touchStartX = t.clientX;
    touchStartY = t.clientY;
}, {passive: true});

carousel?.addEventListener('touchend', (e) =>{
    if(window.innerWidth >=768)return;

    const t = e.changedTouches[0];
    const dx = t.clientX - touchStartX;
    const dy = t.clientY - touchStartY;

    if (Math.abs(dx) < minSwipeDist || Math.abs(dx) < Math.abs(dy))return;

    if (dx < 0) {
        activeIndex += 1;
    } else {
        activeIndex -= 1;
    }

    render();

}, { passive: true});

window.addEventListener('resize', render);
render();


const wrapper = document.querySelector('.imgs-product');
const images = document.querySelectorAll('.imgTitle-product');
const btnNext = document.getElementById('next');
const btnPrev = document.getElementById('previous');

function updateSlider(){
    images.forEach((img, index)=>{
        if (index === activeIndex) {
            img.classList.add('active')
        } else {
            img.classList.remove('active')
        }
    });

    btnPrev.disabled = (activeIndex === 0);
    btnNext.disabled = (activeIndex === images.length - 1);
}

btnNext.addEventListener('click', ()=>{
    if (activeIndex < images.length -1) {
        activeIndex++;
        updateSlider();
    } 
});

btnPrev.addEventListener('click', ()=>{
    if (activeIndex > 0) {
        activeIndex--;
        updateSlider();
    }
});

let startX = 0;
wrapper.addEventListener('touchstart', e=>{
    startX = e.changedTouches[0].clientX;
});

wrapper.addEventListener('touchend', e=>{
    let endX = e.changedTouches[0].clientX;
    let diff = startX - endX;

    if (Math.abs(diff) > 50) {
        if (diff > 0 && activeIndex < images.length -1 ) {
            activeIndex++;
        } else if(diff < activeIndex > 0){
            activeIndex--;
        }
        updateSlider();
    }
});

updateSlider();