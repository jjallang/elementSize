const target = document.getElementById("elContent");



document.querySelector("#elNote > div:nth-of-type(1) > span").innerHTML = target.clientWidth;
target.style.backgroundColor = "#ccc";

document.querySelector("#elNote > div:nth-of-type(2) > span").innerHTML = target.scrollWidth;

document.querySelector("#elNote > div:nth-of-type(3) > span").innerHTML = target.offsetWidth;

document.querySelector("#elNote > div:nth-of-type(4) > span").innerHTML = parseInt(getComputedStyle(target).borderLeftWidth);

const scrollbarWidth = target.offsetWidth - target.clientWidth - parseInt(getComputedStyle(target).borderLeftWidth) - parseInt(getComputedStyle(target).borderRightWidth);
document.querySelector("#elNote > div:nth-of-type(5) > span").innerHTML = scrollbarWidth;

