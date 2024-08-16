const $sliderContainer = $(".slider-container");
const $slideRight = $(".right-slide");
const $slideLeft = $(".left-slide");
const $upButton = $(".up-button");
const $downButton = $(".down-button");
const slidesLength = $slideRight.children("div").length;

let activeSlideIndex = 0;

$slideLeft.css("top", `-${(slidesLength - 1) * 100}vh`);

$upButton.on("click", () => changeSlide("up"));
$downButton.on("click", () => changeSlide("down"));

const changeSlide = (direction) => {
  const sliderHeight = $sliderContainer.height();
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex > slidesLength - 1) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesLength - 1;
    }
  }

  $slideRight.css(
    "transform",
    `translateY(-${activeSlideIndex * sliderHeight}px)`
  );
  $slideLeft.css(
    "transform",
    `translateY(${activeSlideIndex * sliderHeight}px)`
  );
};
