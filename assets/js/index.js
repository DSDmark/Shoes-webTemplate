// ========== SHOW MENU ============ 
const showMenu = (toggleId, navId) => {
 const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId);

 // ============= VALIDATE THAT VARIABES EXIST ============ 
 if (toggle && nav) {
  toggle.addEventListener('click', () => {
   nav.classList.toggle('show-menu');
  })
 }
}
showMenu('nav-toggle', 'nav_menu');

// ============ REMOVE MOBLIE MENU WHEN CLICK ON ========== 
const navLink = document.querySelectorAll('.nav_link');
// console.log(navLink);    // RETURN  THE ALL CLSS IN THE FORM OF ARRAY: 
function onClick() {
 const navMenu = document.getElementById('nav_menu');
 // ==== REMOVE THE CLASS WHEN CLICK =========== 
 navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', onClick));

// =========== SEROLL SECTIONS ACTIVE LINK =========== 
const sections = document.querySelectorAll('section[id]');
//  console.log(sections);   // SECTIONS RETUREN IN THE FORM OF ARRAY 
function scrollActive() {
 const scrollY = window.pageYOffset;
 // console.log(scrollY);

 sections.forEach(current => {
  // console.log(current);    // RETURN THE CURRENT DIV INFO.
  const sectionHeight = current.offsetHeight;
  //  console.log(sectionHeight);   // RETURN THE CURRENT VIEWPORT HIEGHT 
  const sectionTop = current.offsetTop;
  //  console.log(sectionTop);       // RETURN HEADER HEIGTH
  sectionId = current.id;
  //  console.log(current);
  //  console.log(sectionId);

  if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
   document.querySelector(`.nav_menu a[href*=${sectionId}]`).classList.add('active-link');
  } else {
   document.querySelector(`.nav_menu a[href*=${sectionId}]`).classList.remove('active-link');
  }
 })
};
window.addEventListener('scroll', scrollActive);

//  ======== BOX-SHADOW ON HEADER ========== 
function scrollHeader() {
 const nav = document.getElementById('header');
 //  ==== WHEN THE SCROLL IS GREATER THEAN 200 VIEWPORT HEIGTH, ADD THE SCROLL-HEADER CLASS ◖⚆ᴥ⚆◗.
 if (this.scrollY >= 40) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header');
 // console.log(scrollY);
}
window.addEventListener(('scroll'), scrollHeader)

// ============ SHOW SCROLL TOP BAR ========== 
function scrolltop() {
 const scrollTop = document.getElementById('scroll-top');
 //  WHEN THE SCROLL IS HIGHER THAN 500 VIEWPORT HEIGHT , ADD THE SHOW-SCROLL CLASS ( ͡° ͜ʖ ͡°). 
 if (this.scrollY >= 260) scrollTop.classList.add('scroll-top'); else scrollTop.classList.remove('scroll-top');
}
window.addEventListener("scroll", scrolltop);
// ────────────────────────────────────────────────────────────────────────────────
// ============= CHENGE THAME CODE ===========

const change_theme = document.getElementById('change_theme');
const toggleTheme = 'change_theme';
const iconChange = 'fa-sun';

change_theme.addEventListener('click', () => {
 document.body.classList.toggle(toggleTheme);
 change_theme.classList.toggle(iconChange);

 localStorage.setItem('selectedTheme', getCurrentTheme());
 localStorage.setItem('selectedIcon', getCurrentIcon());
});
//============= WHOSE THEME SELECTED WHEN PAGE RELOAD  ==================

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// ========= GET THE CURRENT THEME =========

function getCurrentTheme() { document.body.classList.contains(toggleTheme) ? 'dark' : 'light'; }
function getCurrentIcon() { document.body.classList.contains(iconChange) ? 'fa-sun' : 'fa-moon'; }

//  ADDING OR REMOVEING THEME FROM LOCAL_STORAGE
if (selectedTheme) {
 document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](toggleTheme);
 document.body.classList[selectedIcon === 'fa-moon' ? 'add' : 'remove'](iconChange);
}

const sr = ScrollReveal({
 origin: "top",
 distance: "300px",
 duration: 2000,
 reset: true
});

sr.reveal(`.home_data, .home_img,
      .about_data,.about_img,
      `, {
 interval: 200
});