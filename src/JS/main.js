const manu = document.querySelector('.btn-listNav');
const navs = document.querySelector('.items-link');
const iconList = document.querySelector('.icon-list');
const btnLink = document.querySelectorAll('.nav-link');
const closeIcon = './src/img/close.svg';
const listIcon = './src/img/list.webp';

manu.addEventListener('click', () => {
    navs.classList.toggle('disf-nav');
    if (navs.classList.contains('disf-nav')) {
        iconList.src = closeIcon;
    } else {
        iconList.src = listIcon;
    }
});