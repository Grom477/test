const slides = [...document.querySelectorAll(".slide")];
const len = slides.length;
const prev = document.getElementById("prev");
const next = document.getElementById("next");
var infinite = true;

const pages = document.querySelector(".pagination");
for (let i = 0; i < Math.ceil(len / 3); i++) {
  const btn = document.createElement("i");
  btn.classList.add("fa-solid");
  btn.classList.add("fa-circle");
  btn.style.cursor = 'pointer'
  pages.append(btn);
  btn.addEventListener("click", () => {
    counter = i;
    slides.map((item, index) => {
      item.style.transform = `translateX(-${counter * 300}%)`;
    });
  });
}

let counter = 0;

slides.map((item, index) => {
  item.style.left = index * 45 + "%";
});

next.addEventListener("click", () => {
  if (Math.ceil(len / 4) === counter) {
    counter = 0;
  } else {
    counter++;
  }
  slides.map((item, index) => {
    item.style.transform = `translateX(-${counter * 300}%)`;
  });
  infinite = false
});
prev.addEventListener("click", () => {
  if (counter == 0) {
    counter = Math.ceil(len / 4);
  } else {
    counter--;
  }
  slides.map((item, index) => {
    item.style.transform = `translateX(-${counter * 300}%)`;
  });
  infinite = false
});

setInterval(() => {
  if (infinite) {
    if (Math.ceil(len / 4) === counter) {
      counter = 0;
    } else {
      counter++;
    }
    slides.map((item, index) => {
      item.style.transform = `translateX(-${counter * 300}%)`;
    });
  }
}, 1000);