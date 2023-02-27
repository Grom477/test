

const sliders = [...document.querySelectorAll('.slide')] ; 
const len = sliders.length ; 
const prev = document.querySelector(".btn__prev");
const next = document.querySelector(".btn__next");

let counter = 0
sliders.map((item, index) => {
    item.style.left = index * 25 + "%";
  });

  const pages = document.querySelector(".pagination");
  for (let i = 0; i < Math.ceil(len / 4); i++) {
    const btn = document.createElement("i");
    btn.classList.add("fa-regular");
    btn.classList.add("fa-circle");
    btn.style.cursor = 'pointer'
    pages.append(btn);
    btn.addEventListener("click", () => {
      counter = i;
      btn.classList.remove("fa-regular");
      btn.classList.add("fa-solid");
      sliders.map((item, index) => {
        item.style.transform = `translateX(-${counter * 400}%)`;
      });
    });
  }

next.addEventListener("click", () => {
    
    if (Math.ceil(len / 6) === counter) {
      counter = 0;
    } else {
      counter++;
    }
    sliders.map((item, index) => {
      item.style.transform = `translateX(-${counter * 400}%)`;
    });
  });

  prev.addEventListener("click", () => {
    if (counter == 0) {
      counter = Math.trunc(len / 4);
    } else {
      counter--;
    }
    sliders.map((item, index) => {
      item.style.transform = `translateX(-${counter * 400}%)`;
    });
  });
