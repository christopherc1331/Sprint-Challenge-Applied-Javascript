// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function createCard(obj) {
  //grab parent div

  let parentDiv = document.querySelector(".cards-container");

  //create HTML elements of card

  let cardContainer = document.createElement("div");
  cardContainer.classList.add("card");

  let headline = document.createElement("div");
  headline.classList.add("headline");
  headline.textContent = obj.headline;

  let author = document.createElement("div");
  author.classList.add("author");

  let imageContainer = document.createElement("div");
  imageContainer.classList.add("img-container");

  let authorImage = document.createElement("img");
  authorImage.src = obj.authorPhoto;

  let authorName = document.createElement("span");
  authorName.textContent = obj.authorName;

  //add elements to DOM

  parentDiv.appendChild(cardContainer);
  cardContainer.appendChild(headline);
  cardContainer.appendChild(author);
  author.appendChild(imageContainer);
  imageContainer.appendChild(authorImage);
  author.appendChild(authorName);
}

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    console.log(response.data.articles);
    Object.keys(response.data.articles).forEach(function(key) {
      console.log(key, response.data.articles[key]);
      response.data.articles[key].forEach(item => {
        createCard(item);
      });
    });
  })
  .catch(err => {
    console.log(err);
  });
