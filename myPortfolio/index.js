const header = document.querySelector("header");

/* sticky navbar */

function stickyNavbar() {
    header.classList.toggle("scrolled", window.pageYOffset > 0 );
}

stickyNavbar();

window.addEventListener("scroll", stickyNavbar);