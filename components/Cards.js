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


axios.get('https://lambda-times-api.herokuapp.com/articles')
.then(response => {
    let articles = Object.values(response.data.articles); // object constructor
    articles.forEach(e => {
        e.forEach(el => {  // pushing each article through
            cardMaker.appendChild(createCard(el));
        });
    });
})
.catch(err => {
    console.log('Error: ', err)
  });

const createCard = (object) => {
    const newCard = document.createElement('div');
    const headlineDiv = document.createElement('div');
    const authorDiv = document.createElement('div');
    const imgDiv = document.createElement('div');
    const imgSrc = document.createElement('img');
    const authorName = document.createElement('span');

    newCard.appendChild(headlineDiv);
    // console.log("createCard -> headlineDiv", headlineDiv)
    newCard.appendChild(authorDiv);
    authorDiv.appendChild(imgDiv);
    imgDiv.appendChild(imgSrc);
    authorDiv.appendChild(authorName);

    newCard.classList.add('card');
    headlineDiv.classList.add('headline');
    authorDiv.classList.add('author');
    imgDiv.classList.add('img-container');

    headlineDiv.textContent = object.headline;
    imgSrc.src = object.authorPhoto;
    authorName.textContent = `By ${object.authorName}`;
    console.log("createCard -> object.authorName", object.authorName)

    newCard.addEventListener('click', (event) => {
        console.log(headlineDiv.textContent);
     });

    return newCard;
}
const cardMaker = document.querySelector('.cards-container');
