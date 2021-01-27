window.onscroll = function() { myFunction() };

let navbar = document.getElementById("navbar");

let sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

// window.onscroll = function() { stickycarrito() };

// let minicarrito = document.getElementsByClassName('rcarrito');

// let stick = minicarrito.offsetTop;

// function stickycarrito() {
//     if (window.pageYOffset >= sticky) {
//         minicarrito.classList.add('sticky')
//     } else {
//         minicarrito.classList.remove('sticky')
//     }
// }