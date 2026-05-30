const checkoutForm = document.querySelector(".link-checkoutForm");
const checkout = document.getElementById("checkout");
const closeRegistration = document.querySelector(".close-registration");
const oderRegistration = document.querySelector(".oder-registration");

checkout.classList.add("display-none");

checkoutForm.addEventListener("click", ()=>{
    checkout.classList.remove("display-none");
    checkout.classList.add("display-flex");
})

closeRegistration.addEventListener("click", ()=>{
    checkout.classList.remove("display-flex");
    checkout.classList.add("display-none");
})

oderRegistration.addEventListener("click", ()=>{
    alert("با موفقیت ثبت شد");
    checkout.classList.remove("display-flex");
    checkout.classList.add("display-none");
    setTimeout(()=>{
        alert("با موفقیت ثبت شد");
    }, 2000)
})