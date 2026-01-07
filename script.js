const wheel = document.getElementById("wheel");

const MIN = 1;
const MAX = 200;
const ITEM_HEIGHT = 36;

let currentValue = 100;
let offset = 0;
let dragging = false;
let lastY = 0;

// Create numbers
for (let i = MIN; i <= MAX; i++) {
  const div = document.createElement("div");
  div.className = "number";
  div.textContent = i;
  wheel.appendChild(div);
}

const numbers = [...wheel.children];

function updateWheel() {
  numbers.forEach((el, i) => {
    const value = i + MIN;
    const diff = value - currentValue;

    el.style.transform = `translateY(${diff * ITEM_HEIGHT}px) scale(${Math.max(0.7, 1 - Math.abs(diff) * 0.1)})`;
    el.style.opacity = Math.max(0.2, 1 - Math.abs(diff) * 0.25);

    el.classList.toggle("active", value === currentValue);
  });
}

updateWheel();

// Pointer events (mobile + mouse)
wheel.addEventListener("pointerdown", e => {
  dragging = true;
  lastY = e.clientY;
  wheel.setPointerCapture(e.pointerId);
});

wheel.addEventListener("pointermove", e => {
  if (!dragging) return;

  const delta = lastY - e.clientY;
  offset += delta;
  lastY = e.clientY;

  const steps = Math.round(offset / ITEM_HEIGHT);
  if (steps !== 0) {
    currentValue = Math.min(MAX, Math.max(MIN, currentValue + steps));
    offset = 0;
    updateWheel();
  }
});

wheel.addEventListener("pointerup", () => {
  dragging = false;
  offset = 0;
});
