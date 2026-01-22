let isTracking = false;

let onepos = true;
let ovval = 5;
let cubpos = 5;

document.addEventListener("mousedown", (e) => {
  isTracking = true;
});

document.addEventListener("mousemove", (e) => {
  if (!isTracking) return;

  let posy = e.clientY;
  if (onepos){
    ovval = posy
    onepos = false
  }
  var momove = ovval - posy;
  cubpos += momove * -1;
  var minscr = -34000;
  var maxscr = 2150;
  if (cubpos < minscr){
    cubpos = minscr;
  }else if (cubpos > maxscr){
    cubpos = maxscr;
  }
  var elone = document.getElementById("cube");
  elone.style.top = cubpos / 150 + "vw";
});

document.addEventListener("mouseup", () => {
  isTracking = false;
  onepos = true;
});

document.addEventListener("mouseleave", () => {
  isTracking = false;
  onepos = true;
});