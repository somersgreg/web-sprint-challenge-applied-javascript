
// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a create tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element


let topicsArray = [];
const topicsClass = document.querySelector('.topics');
axios
.get ('https://lambda-times-api.herokuapp.com/topics')
.then (response => {
    topicsArray = response.data.topics; // so i can do method with it
    console.log("topicsArray", topicsArray) //topicsArray (5) ["javascript", "bootstrap", "technology", "jquery", "node.js"]
    topicsArray.forEach(e => {
    let createTab = document.createElement ('div'); // create divs with each topic word
    console.log("createTab", createTab)
    createTab.classList.add ('tab');
    createTab.textContent = e;
    topicsClass.appendChild (createTab)
})  })
.catch(err => {
    console.log('Error: ', err)
})
