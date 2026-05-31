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

const pageBtns = document.querySelectorAll(".link-page");
const pages = document.querySelectorAll(".blogs");
const prevBtn = document.querySelector(".previous-page");
const nextBtn = document.querySelector(".next-page");

let currenPage = 1;
const totalPages = pages.length;

function showPage(pageNumber){
    pages.forEach(page => page.classList.remove('active'));
    const targetPage = document.querySelector(`.blogs[data-page="${pageNumber}"]`);
    if (targetPage) {
        targetPage.classList.add('active');
    }

    pageBtns.forEach(btn => {
        btn.classList.toggle('active', Number(btn.dataset.page) === pageNumber);
    })

    currenPage = pageNumber;

    prevBtn.disabled = currenPage === 1;
    nextBtn.disabled = currenPage === totalPages;
}

pageBtns.forEach(btn => {
    btn.addEventListener('click', ()=>{
        const page = Number(btn.dataset.page);
        showPage(page);
    });
});

prevBtn.addEventListener('click', () =>{
    if (currenPage > 1) {
        showPage(currenPage - 1);
    }
});

nextBtn.addEventListener('click', ()=>{
    if (currenPage < totalPages) {
        showPage(currenPage + 1);
    }
});

showPage(1);