var cubex = 1000;
var cubey = 1000;

var ispressed = false;
var rightispressed = false;
var upispressed = false;
var downispressed = false;
var leftmove = 0;
var rightmove = 0;
var upmove = 0;
var downmove = 0;

const buttonleft = document.getElementById("buttonleft");
const buttonright = document.getElementById("buttonright");
const buttonup = document.getElementById("buttonup");
const buttondown = document.getElementById("buttondown");
const thecube = document.getElementById("thecube");

buttonleft.addEventListener("pointerdown", () =>{
    ispressed = true;
    leftmove = setInterval(() => {cubex -= 1;thecube.style.left = String(cubex/100) + "vw";});
});

buttonleft.addEventListener("pointerup", () => {
    ispressed = false;
    clearInterval(leftmove);
})

buttonleft.addEventListener("pointerleave", () => {
    ispressed = false;
    clearInterval(leftmove);
})

buttonright.addEventListener("pointerdown", () =>{
    rightispressed = true;
    rightmove = setInterval(() => {cubex += 1;thecube.style.left = String(cubex/100) + "vw";});
});

buttonright.addEventListener("pointerup", () => {
    rightispressed = false;
    clearInterval(rightmove);
})

buttonright.addEventListener("pointerleave", () => {
    rightispressed = false;
    clearInterval(rightmove);
})


buttonup.addEventListener("pointerdown", () =>{
    upispressed = true;
    upmove = setInterval(() => {cubey -= 1;thecube.style.top = String(cubey/100) + "vw";});
});

buttonup.addEventListener("pointerup", () => {
    upispressed = false;
    clearInterval(upmove);
})

buttonup.addEventListener("pointerleave", () => {
    upispressed = false;
    clearInterval(upmove);
})

buttondown.addEventListener("pointerdown", () =>{
    downispressed = true;
    downmove = setInterval(() => {cubey += 1;thecube.style.top = String(cubey/100) + "vw";});
});

buttondown.addEventListener("pointerup", () => {
    downispressed = false;
    clearInterval(downmove);
})

buttondown.addEventListener("pointerleave", () => {
    downispressed = false;
    clearInterval(downmove);
})