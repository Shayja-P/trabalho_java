var navbarvertical = document.getElementById("navt");

navbarvertical.style.height = '0%';
function toggle() {
    if (navbarvertical.style.height == '0%') {
        navbarvertical.style.height = '50%';
    } else {
        navbarvertical.style.height = '0%';
    }
}
