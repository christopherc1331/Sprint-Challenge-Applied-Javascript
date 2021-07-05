// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header(obj) {
  //Grab parent div
  let parentDiv = document.querySelector(".header-container");

  //create HTML elements

  let headerDiv = document.createElement("div");
  headerDiv.classList.add("header");

  let date = document.createElement("span");
  date.classList.add("span");
  date.textContent = "MARCH 28, 2019";

  let title = document.createElement("h1");
  title.textContent = "Lambda Times";

  let temp = document.createElement("span");
  temp.classList.add("temp");
  temp.textContent = "98°";

  //add elements to DOM

  parentDiv.appendChild(headerDiv);
  headerDiv.appendChild(date);
  headerDiv.appendChild(title);
  headerDiv.appendChild(temp);
}

Header();
