// Sticky Navigation Bar and Shrink Header on Scroll
const NAVBAR_HIDDEN_TOP = "-100px";

window.onscroll = function() {
    handleScroll();
};

function handleScroll() {
    const header = document.getElementById("header");
    const navbar = document.getElementById("navbar");

    // Check if user has scrolled down 100px
    if (window.scrollY > 100) {
        // When scrolled down, shrink header and show navbar
        header.style.height = "10vh";
        navbar.style.top = "0";
        navbar.style.visibility = "visible";
        navbar.style.opacity = "1";
    } else {
        // Reset to original full-screen header when at top
        header.style.height = "100vh";
        navbar.style.top = NAVBAR_HIDDEN_TOP;
        navbar.style.visibility = "hidden";
        navbar.style.opacity = "0";
    }
}
