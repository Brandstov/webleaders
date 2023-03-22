const body = document.querySelector('body');

body.onscroll = function () {
    const theta = document.documentElement.scrollTop / 50 % Math.PI;
    const test = document.documentElement.scrollTop - 800;

    document.getElementById('js-logo').style.paddingLeft = 200 + test/4 + 'px';

    // document.getElementById('js-logo').style.transform = 'rotate(' + theta + 10000 + 'rad)';
    console.log(test);
};

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