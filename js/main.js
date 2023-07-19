var navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    navLinks.forEach((link) => link.classList.remove("nav-active"));
    this.classList.add("nav-active");
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

window.addEventListener("scroll", function () {
  let fromTop = window.scrollY + window.innerHeight / 3;

  navLinks.forEach((link) => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      navLinks.forEach((link) => link.classList.remove("nav-active")); // Ajout de cette ligne
      link.classList.add("nav-active");
    } else {
      link.classList.remove("nav-active");
    }
  });
});
