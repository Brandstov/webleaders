window.onscroll = function() {
    const theta = document.documentElement.scrollTop / 50 % Math.PI;
    const test = document.documentElement.scrollTop - 800

document.getElementById('js-logo').style.transform ='rotate(' + window.pageYOffset + "deg)';
console.log(theta)
}