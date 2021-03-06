let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');
let header = document.querySelector('header');
let regis = document.querySelector('#register');
let formCloseRes = document.querySelector('#form-close-res');
let newacc = document.querySelector('.new-acc');
let signin = document.querySelector('.sign-in');
let forgotform = document.querySelector('#forgot');
let formCloseForgot = document.querySelector('#form-close-forgot');
let forgotbtn = document.querySelector('.forgot-pass');
let forgotback = document.querySelector('.forgot-back');

window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
    regis.classList.remove('active');
    loginForm.classList.remove('active');
    forgotform.classList.remove('active');

}

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});

videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});


newacc.addEventListener('click', () =>{
  regis.classList.add('active');
  loginForm.classList.remove('active');
});

formCloseRes.addEventListener('click', () =>{
  regis.classList.remove('active');
});

signin.addEventListener('click',() =>{
  loginForm.classList.add('active');
  regis.classList.remove('active');
})

forgotbtn.addEventListener('click', () =>{
  loginForm.classList.remove('active');
  forgotform.classList.add('active');
});
formCloseForgot.addEventListener('click', () =>{
  forgotform.classList.remove('active');
});
forgotback.addEventListener('click',() =>{
  loginForm.classList.add('active');
  forgotform.classList.remove('active');
})
// js review
var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500
    },
    breakpoints: {
        450: {
          slidesPerView: 2,
        },    
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
      },
});

// Toast function
function toast({ title = "", message = "", duration = 3000 }) {
  const main = document.getElementById("toast");
  if (main) {
    const toast = document.createElement("div");

    // Auto remove toast
    const autoRemoveId = setTimeout(function () {
      main.removeChild(toast);
    }, duration + 1000);

    // Remove toast when clicked
    toast.onclick = function (e) {
      if (e.target.closest(".toast__close")) {
        main.removeChild(toast);
        clearTimeout(autoRemoveId);
      }
    };

    // const icons = {
    //   success: "fas fa-check-circle",
    //   info: "fas fa-info-circle",
    //   warning: "fas fa-exclamation-circle",
    //   error: "fas fa-exclamation-circle"
    // };
    // const icon = icons[type];
    const delay = (duration / 1000).toFixed(2);

    toast.classList.add("toast", `toast--success`);
    toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;

    toast.innerHTML = `
                    <div class="toast__icon">
                        <i class="fas fa-check-circle"></i>
                    </div>
                    <div class="toast__body">
                        <h3 class="toast__title">${title}</h3>
                        <p class="toast__msg">${message}</p>
                    </div>
                    <div class="toast__close">
                        <i class="fas fa-times"></i>
                    </div>
                `;
    main.appendChild(toast);
  }
}
