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


//entrypoint

const cardsEntry = document.querySelector('.cards-container')

//API function
axios.get('https://lambda-times-backend.herokuapp.com/articles')
 .then(response =>{
     console.log(response.data.articles.bootstrap);
 })

axios.get('https://lambda-times-backend.herokuapp.com/articles')

.then(response => {

    response.data.articles.bootstrap.forEach(item => {
        const newBootstrap= createCard(item)
        cardsEntry.appendChild(newBootstrap);

    response.data.articles.technology.forEach(item => {
            const newTechnology= createCard(item)
            cardsEntry.appendChild(newTechnology);
        });

    response.data.articles.jquery.forEach(item => {
            const newJQuery= createCard(item)
            cardsEntry.appendChild(newJQuery);
        });

    response.data.articles.node.forEach(item => {
            const newNode= createCard(item)
            cardsEntry.appendChild(newNode);
        });
    }); 

});

//card creator 

function createCard(data) {
    const newCard = document.createElement('div');
    const newHeadline = document.createElement('div');
    const newAuthor = document.createElement('div');
    const newImageDiv = document.createElement('div');
    const newImage = document.createElement('img');
    const newAuthorName = document.createElement('span');


    //set class names

    newCard.classList.add('card');
    newHeadline.classList.add('headline');
    newAuthor.classList.add('author');
    newImageDiv.classList.add('img-container');
 
    //set content

    newHeadline.textContent = `${data.headline}`
    newImage.src = `${data.authorPhoto}`
    newAuthorName.textContent = `${data.authorName}`

   //setup strcuture of elements

    newCard.appendChild(newHeadline);
    newCard.appendChild(newAuthor);
    newAuthor.appendChild(newImageDiv);
    newAuthor.appendChild(newAuthorName);
    newImageDiv.appendChild(newImage);

    return newCard;
};