// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
        // console.log ('Here is the res: ', res); // data: articles: {javascript:...}
        // console.log (res.data.articles) // {javascript: Array(4), bootstrap: Array(3), technology: Array(3), jquery: Array(3), node: Array(2)}
        // let keys = Object.keys (res.data.articles);
        // console.log (keys) //(5) ["javascript", "bootstrap", "technology", "jquery", "node"]

keys =[]

axios
    .get (`https://lambda-times-api.herokuapp.com/articles`)
    .then (res => {

        let javascript = res.data.articles.javascript;
        let bootstrap = res.data.articles.bootstrap;
        let technology = res.data.articles.technology;
        let jquery = res.data.articles.jquery;
        let node = res.data.articles.node;

        keys.forEach(el => {
        console.log("el", el)
            el.forEach(e => {
            cardsEntryPoint.appendChild(cardMaker(e))})})
    })
    .catch(err => {
        console.log('Error: ', err);
    });
function cardMaker(object) {
    const divCard = document.createElement('div');
    const headlineDiv = document.createElement('div');
    const authorDiv = document.createElement('div');
    const imgDiv = document.createElement('div');
    const img = document.createElement('img');
    const span = document.createElement('span');

    divCard.classList.add('card');
    headlineDiv.classList.add('headline');
    authorDiv.classList.add('author');
    imgDiv.classList.add('img-container');

    headlineDiv.textContent = object.headline;
    img.src = object.authorPhoto;
    span.textContent = `By ${object.authorName}`;
    divCard.appendChild(headlineDiv);
    divCard.appendChild(authorDiv);
    authorDiv.appendChild(imgDiv);
    imgDiv.appendChild(img);
    authorDiv.appendChild(span);

    divCard.addEventListener('click', (event) => {
       console.log(headlineDiv.textContent = object.headline);
    });
    return divCard;
};
const cardsEntryPoint = document.querySelector('.cards-container');
