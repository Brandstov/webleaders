const body = document.querySelector('body');

body.onscroll = function () {
    const theta = document.documentElement.scrollTop / 50 % Math.PI;
    const topDistance = document.documentElement.scrollTop - 800;

    document.getElementById('js-logo').style.paddingLeft = 200 + topDistance/4 + 'px';

    // document.getElementById('js-logo').style.transform = 'rotate(' + theta + 10000 + 'rad)';
    console.log(test);
};

const parallax = document.getElementById("parallax");

window.addEventListener("scroll", function () {
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = '-' + offset / 8 + "px";
    // DIV 1 background will move slower than other elements on scroll.
  });

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         console.log(entry)
//         if (entry.isIntersecting) {
//             entry.target.classList.add('show');
//         } else {
//             entry.target.classList.remove('show');
//         }
//     })
// })

// const rotateElement = document.querySelectorAll('.hidden');
// rotateElement.forEach((el) => observer.observe(el));

// window.onscroll = function () {
//     scrollRotate();
// };