/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function addCarouseltoDOM() {
  let parentDiv = document.querySelector(".carousel-container");

  let carouselDiv = document.createElement("div");
  carouselDiv.classList.add("carousel");

  let leftBtn = document.createElement("div");
  leftBtn.classList.add("left-button");
  leftBtn.addEventListener("click", event => {
    picCarousel();
  });

  let img1 = document.createElement("img");
  img1.src = "./assets/carousel/mountains.jpeg";

  let img2 = document.createElement("img");
  img2.src = "./assets/carousel/computer.jpeg";

  let img3 = document.createElement("img");
  img3.src = "./assets/carousel/trees.jpeg";

  let img4 = document.createElement("img");
  img4.src = "./assets/carousel/turntable.jpeg";

  let rightBtn = document.createElement("div");
  rightBtn.classList.add("right-button");
  rightBtn.addEventListener("click", event => {
    picCarousel();
  });

  //add elements to DOM

  parentDiv.appendChild(carouselDiv);
  carouselDiv.appendChild(leftBtn);
  carouselDiv.appendChild(img1);
  carouselDiv.appendChild(img2);
  carouselDiv.appendChild(img3);
  carouselDiv.appendChild(img4);
  carouselDiv.appendChild(rightBtn);

  //carousel function
  let currentIndex = 0;
  let imgArr = [img1, img2, img3, img4];
  function picCarousel() {
    document.querySelectorAll("");
    if (true) {
      if (event.target === leftBtn) {
        if (currentIndex === 0) {
          currentIndex = imgArr[-1];
          imgArr[currentIndex].display = "block";
        } else {
          currentIndex--;
          imgArr[currentIndex].display = "block";
        }
      } else {
        if (currentindex === imgArr.length - 1) {
          currentIndex = 0;
        } else {
          currentindex++;
        }
      }
    }
  }
}

addCarouseltoDOM();
