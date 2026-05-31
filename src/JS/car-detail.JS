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

const cars = [
    {
        id: 1,
        nameProduct: "فراری لافراری",
        salePrice: "1.400.000$",
        image: "../src/img/ferrari2.webp",
        image2: "../src/img/Ferrari-LaFerrari.webp",
        image3: "../src/img/ferrari 5.webp",
        image4: "../src/img/ferrari-laferrari 6.webp",
        offProduct: "نقدی",
        nameCompany: "فراری",
        productType: "لافراری",
        engine: "V12 بنزینی",
        power: "950 اسب بخار",
        gearbox: "7 سرعته دو کلاچه",
        zeroToOneHunderd: "زیر سه ثانیه",
        topSpeed: "350 کیلومتر بر ساعت",
        function: "0 کیلومتر",
        description: "-",
        yearOfManufacture: "از 2013"
    },
    {
        id: 2,
        nameProduct: "پورشه 911 GT3",
        salePrice: "225.000$",
        image: "../src/img/porsche.webp",
        image2: "../src/img/porsche2.webp",
        image3:"../src/img/porsche3.webp",
        image4:"../src/img/porsche4.webp",
        offProduct: "نقدی",
        nameCompany: "پورشه",
        productType: "911 GT3",
        engine: "6 سیلندر  ",
        power: "525 اسب بخار",
        gearbox: "7 سرعته دو کلاچه",
        zeroToOneHunderd: "3.2 ثانیه",
        topSpeed: "296 کیلومتر بر ساعت",
        function: "0 کیلومتر",
        description: "-",
        yearOfManufacture: "-"
    },
    {
        id: 3,
        nameProduct: "لامبورگینی پرفورمانته اسپایدر",
        salePrice: "308,000 $",
        image: "../src/img/lamborghini.webp",
        image2: "../src/img/Lamborghini-Huracan_Performante_Spyder4.webp",
        image3: "../src/img/Lamborghini-Huracan_Performante_Spyder2.webp",
        image4: "../src/img/Lamborghini-Huracan_Performante_Spyder3.webp",
        offProduct: "نقدی",
        nameCompany: "لامبورگینی",
        productType: "هوارکان پرفورمانته اسپایدر",
        engine: "10 سیلندر تنفس طبیعی",
        power: "640 اسب بخار",
        gearbox: "7 سرعته",
        zeroToOneHunderd: "3.1",
        topSpeed: "325 کیلومتر بر ساعت",
        function: "0 کیلومتر",
        description: "-",
        yearOfManufacture: "2018"
    },
    {
        id: 4,
        nameProduct: "BMW M4",
        salePrice: "125.000$",
        image: "../src/img/BMW-M4.webp",
        image2: "../src/img/BMW M4 2.webp",
        image3: "../src/img/BMW M4 3.webp",
        image4: "../src/img/BMW M4 5.webp",
        offProduct: "نقدی",
        nameCompany:"BMW",
        productType: "M4",
        engine: "6 سیلندر خطی",
        power: "503 اسب بخار",
        gearbox: "7 سرعته",
        zeroToOneHunderd: "3.9 ثانیه",
        topSpeed: "249 کیلومتر بر ساعت",
        function: "0 کیلومتر",
        description: "-",
        yearOfManufacture: "2020"
    },
    {
        id: 5,
        nameProduct: "Benz AMG GT",
        salePrice: "114.000",
        image: "../src/img/benz amg 4.webp",
        image2: "../src/img/BENZ AMG 3.webp",
        image3: "../src/img/Benz AMG GT.webp",
        image4:"../src/img/benz amg5.webp",
        offProduct: "نقدی",
        nameCompany: "Benz",
        productType: "AMG GT R",
        engine: "8 سیلندر توربو شارژ",
        power: "577 اسب بخار",
        gearbox: "7 سرعته",
        zeroToOneHunderd: "3.7 ثانیه",
        topSpeed: "305 کیلومتر بر ساعت",
        function: "0 کیلومتر",
        description: "-",
        yearOfManufacture: "2021"
    },
    {
        id: 6,
        nameProduct: "benz G63",
        salePrice: "250,000$",
        image: "../src/img/benz-GClass.webp",
        image2: "../src/img/Benz-G63-4.webp",
        image3: "../src/img/benz g63.webp",
        image4: "../src/img/benz g63 4.webp",
        offProduct: "نقدی",
        nameCompany: "Benz",
        productType: "G63",
        engine: "8 سیلندر تویین توربو",
        power: "577 اسب بخار",
        gearbox: "9 سرعته",
        zeroToOneHunderd: "4.5 ثانیه",
        topSpeed: "239 کیلومتر بر ساعت",
        function: "0 کیلومتر",
        description: "-",
        yearOfManufacture: "2019"
    },
    {
        id: 7,
        nameProduct: "دوج چلنجر",
        salePrice: "100.000$",
        image: "../src/img/dodge.webp",
        image2: "../src/img/Dodge 2.webp",
        image3: "../src/img/Dodge 3.webp",
        image4:"../src/img/dodge 5.webp",
        offProduct: "نقدی",
        nameCompany: "Dodge",
        productType: "chalanger",
        engine: "6 سیلندر ",
        power: "310 اسب بخار",
        gearbox: "8 سرعته",
        zeroToOneHunderd: "6.7",
        topSpeed: "-",
        function: "0 کیلومتر",
        description: "-",
        yearOfManufacture: "2016"
    },
    {
        id: 8,
        nameProduct: "فورد موستانگ شلبی",
        salePrice: "225,000$",
        image: "../src/img/Ford.webp",
        image2: "../src/img/Ford 2.webp",
        image3: "../src/img/ford3.webp",
        image4: "../src/img/ford-mustang-gt500.webp",
        offProduct: "نقدی",
        nameCompany: "Ford",
        productType: "Mustang GT500",
        engine: "8 سیلندر سوپر شارژر",
        power: "760 اسب بخار",
        gearbox: "7 سرعته دو کلاچه",
        zeroToOneHunderd: "6 ثانیه",
        topSpeed: "290 کیلومتر بر ساعت",
        function: "0 کیلومتر",
        description: "-",
        yearOfManufacture: "-"
    }
];

const params = new URLSearchParams(window.location.search);
const productId = parseInt(params.get("id"));

const car = cars.find(p => p.id === productId);

if (car) {
    document.querySelector("#nameProduct").innerText = car.nameProduct;
    document.querySelector("#salePrice").innerText = car.salePrice;
    document.querySelector("#description").innerText = car.description;
    document.querySelector("#image").src = car.image;
    document.querySelector("#image2").src = car.image2;
    document.querySelector("#image3").src = car.image3;
    document.querySelector("#image4").src = car.image4;
    document.querySelector("#offProduct").innerText = car.offProduct;
    document.querySelector("#yearOfManufacture").innerText = car.yearOfManufacture;
    document.querySelector("#nameCompany").innerText = car.nameCompany;
    document.querySelector("#productType").innerText = car.productType;
    document.querySelector("#engine").innerText = car.engine;
    document.querySelector("#gearbox").innerText = car.gearbox;
    document.querySelector("#zeroToOneHunderd").innerText = car.zeroToOneHunderd;
    document.querySelector("#topSpeed").innerText = car.topSpeed;
    document.querySelector("#function").innerText = car.function;
    document.querySelector("#power").innerText = car.power;
} else {
    document.body.innerHTML = "<h2>خودرو مد نظر یافت نشد</h2>"
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