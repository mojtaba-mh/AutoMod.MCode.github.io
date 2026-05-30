const manu = document.querySelector('.btn-listNav');
const navs = document.querySelector('.items-link');
const iconList = document.querySelector('.icon-list');
const btnLink = document.querySelectorAll('.nav-link');
const closeIcon = '../src/img/close.svg';
const listIcon = '../src/img/list.webp';
manu.addEventListener('click', (e) => {
    navs.classList.toggle('disf-nav');
    if (navs.classList.contains('disf-nav')) {
        iconList.src = closeIcon;
    } else {
        iconList.src = listIcon;
    }
});

const registerBtn = document.getElementById('register-btn');
const authSection = document.getElementById('auth-section');
const userIconsDiv = document.getElementById('user-icons');

function manageHeaderUI(){
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    if (isLoggedIn) {
        authSection.style.display= 'none';
        userIconsDiv.style.display= 'flex';
    }else{
        authSection.style.display= 'black';
        userIconsDiv.style.display= 'none';
    }
}

function simulateSuccessfulRegistration(){
    console.log("ثبت نام موفقیت آمیز بود");
    localStorage.setItem('isLoggedIn', 'true');

    manageHeaderUI();
}

document.addEventListener('DOMContentLoaded', () =>{
    manageHeaderUI();

    if (registerBtn) {
        registerBtn.addEventListener('click', ()=>{
            simulateSuccessfulRegistration();
        });
    }
});

btnLink.forEach(link =>{
    link.addEventListener('click', ()=>{
        navs.classList.remove('disf-nav');
        iconList.src = listIcon;
    });
});

window.addEventListener('load', ()=>{
    setTimeout(()=>{
        const loading = document.querySelector(".loader-wrapper");
        loading.classList.add("display-none")
        document.body.classList.remove("loading");
    }, 2800);
});