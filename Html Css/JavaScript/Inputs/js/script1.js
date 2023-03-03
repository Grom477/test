const slides = document.querySelectorAll(".slide")
const nextBtn = document.querySelector(".next-btn")
const prevBtn = document.querySelector(".prev-btn")



let currentIndex = 0;
let lastIndex = slides.length - 2;

slides.forEach((slide, index) => {
  console.log(slide)
  slide.style.position = "absolute"
  slide.style.left = index* 100 + "%"
})

nextBtn.addEventListener("click", () => {
    
    currentIndex === lastIndex ? (currentIndex = 0) : currentIndex++;
    slides.forEach((slide, index) => {
        let calculate = 100 * (index-currentIndex)
        slide.style.transform = `translateX(${calculate}%)`;
    });
    console.log(currentIndex);
});

setInterval(() => {
  slides.forEach((slide, index) => {
    let calculate = 110 * (index-currentIndex)
    slide.style.transform = `translateX(${calculate}%)`;
})
}, 1000)

// setInterval(() => {
//   slides.forEach((slide, index) => {
//     let calculate = 500 * (index-currentIndex)
//     slide.style.transform = `translateX(-${calculate}%)`;
// })
// }, 0)

prevBtn.addEventListener("click", () => {
    currentIndex === 0 ? (currentIndex = lastIndex) : currentIndex--
    slides.forEach((slide, index) => {
      const calculate = 100 * (index - currentIndex)
      slide.style.transform = `translateX(${calculate}%)`
    })
    console.log(currentIndex)
  });

