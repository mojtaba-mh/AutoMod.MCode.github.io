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