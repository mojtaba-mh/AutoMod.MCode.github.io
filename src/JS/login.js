const login = document.querySelector('#login');
const signUp = document.querySelector('#sign-up');
const code = document.querySelector('#code');


document.querySelector('#goTo-sign').addEventListener('click', () => {
    login.classList.remove('display-flex');
    login.classList.add('display-none');
    signUp.classList.remove('display-none');
    signUp.classList.add('display-flex');
})

document.querySelector('#goTo-login').addEventListener('click', () => {
    signUp.classList.remove('display-flex');
    signUp.classList.add('display-none');
    login.classList.remove('display-none');
    login.classList.add('display-flex');
})

document.querySelector('.goTo-code1').addEventListener('click', () => {
    login.classList.remove('display-flex');
    login.classList.add('display-none');
    code.classList.remove('display-none');
    code.classList.add('display-flex');
})

document.querySelector('.goTo-code2').addEventListener('click', () => {
    signUp.classList.remove('display-flex');
    signUp.classList.add('display-none');
    code.classList.remove('display-none');
    code.classList.add('display-flex');
})

const totalSeconds = 120;
const countdownEl = document.getElementById("countdown");
const resendLinkEl = document.getElementById("resendLink");

let = remaining = totalSeconds;

function formatTime(sec) {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0");
}

const timer = setInterval(() => {
    remaining -= 1;
    if (remaining <= 0) {
        clearInterval(timer);
        countdownEl.textContent = "00:00";
        document.querySelector('.codeTimer-count').classList.add('display-none');
        resendLinkEl.classList.add('display-inline');
        return;
    }

    countdownEl.textContent = formatTime(remaining);
}, 1000);

function resendCode() {
    alert("ارسال مجدد کد انجام شد (نمونه)");
    resetTimer();
}

function resetTimer() {
    resendLinkEl.classList.remove('display-inline');
    resendLinkEl.classList.add('display-none');
    document.querySelector('.codeTimer-count').classList.add('display-inline');

    remaining = totalSeconds;
    countdownEl.textContent = formatTime(remaining);

    const newTimer = setInterval(() => {
        remaining -= 1;
        if (remaining <= 0) {
            clearInterval(timer);
            countdownEl.textContent = "00:00";
            document.querySelector('.codeTimer-count').classList.add('display-none');
            resendLinkEl.classList.add('display-inline');
            return;
        }

        countdownEl.textContent = formatTime(remaining);
    }, 1000);
}

document.querySelector('#goTo-informationUser').addEventListener('click', () => {
    code.classList.remove('display-flex');
    code.classList.add('display-none')
    document.querySelector('#information-user').classList.remove('display-none');
    document.querySelector('#information-user').classList.add('display-flex');
})