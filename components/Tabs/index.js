// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then(response => {
    response.data.topics.forEach(item => {
      Tab(item);
    });
  })
  .catch(err => {
    console.log(err);
  });

function Tab(item) {
  //grab parent div

  let parentDiv = document.querySelector(".topics");

  //create div

  let tabDiv = document.createElement("div");
  tabDiv.classList.add("tab");
  tabDiv.textContent = item;

  //add tab to DOM

  parentDiv.appendChild(tabDiv);
}
