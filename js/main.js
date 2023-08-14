var navLinks = document.querySelectorAll("nav a");
var isScrolling = false;

navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    navLinks.forEach((link) => link.classList.remove("nav-active"));
    this.classList.add("nav-active");

    isScrolling = true;
    var target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });

    setTimeout(() => {
      isScrolling = false;
    }, 1000);
  });
});

window.addEventListener("scroll", function () {
  if (isScrolling) return;

  let fromTop = window.scrollY + window.innerHeight / 3;

  navLinks.forEach((link) => {
    let section = document.querySelector(link.hash);

    if (link.hash === "#Home") {
      if (window.scrollY < 100) {
        navLinks.forEach((link) => link.classList.remove("nav-active"));
        link.classList.add("nav-active");
      }
    } else if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      navLinks.forEach((link) => link.classList.remove("nav-active"));
      link.classList.add("nav-active");
    } else {
      link.classList.remove("nav-active");
    }
  });
});

let hireMeButton = document.querySelector('.box-content a[href="#Contact"]');

hireMeButton.addEventListener("click", function (e) {
  e.preventDefault();

  navLinks.forEach((link) => link.classList.remove("nav-active"));
  let contactLink = document.querySelector('nav a[href="#Contact"]');
  contactLink.classList.add("nav-active");

  isScrolling = true;
  var target = document.querySelector(this.getAttribute("href"));
  target.scrollIntoView({ behavior: "smooth" });

  setTimeout(() => {
    isScrolling = false;
  }, 1000);
});

document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuOpenButton = document.getElementById("mobile-menu-open");
  const mobileMenuCloseButton = document.getElementById("mobile-menu-close");
  const nav = document.querySelector("nav");
  const body = document.body;

  mobileMenuOpenButton.addEventListener("click", function () {
    nav.classList.add("active");
    mobileMenuOpenButton.style.display = "none";
    mobileMenuCloseButton.style.display = "block";
    body.classList.add("no-scroll");
  });

  mobileMenuCloseButton.addEventListener("click", function () {
    nav.classList.remove("active");
    mobileMenuOpenButton.style.display = "block";
    mobileMenuCloseButton.style.display = "none";
    body.classList.remove("no-scroll");
  });

  // Fermer le menu lorsqu'un lien est cliqué
  const navLinks = nav.querySelectorAll("a");
  for (const link of navLinks) {
    link.addEventListener("click", function () {
      nav.classList.remove("active");
      mobileMenuOpenButton.style.display = "block";
      mobileMenuCloseButton.style.display = "none";
      body.classList.remove("no-scroll");
    });
  }
});
