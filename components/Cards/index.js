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

//     axios.get('https://lambda-times-backend.herokuapp.com/articles')

// .then(response => {
//     console.log(response.data.articles);
   
// });



axios.get('https://lambda-times-backend.herokuapp.com/articles')

.then(response => {
    console.log(response.data.articles.bootstrap);
    response.data.articles.bootstrap.forEach(item => {
        const newBootstrap= createTabs(item)
        tabsEntry.appendChild(newTopicTitle);
    });
});

function createCard(data) {
    const newCard = document.createElement('div');
    const newHeadline = documenet.createElement('div');
    const newAuthor = documenet.createElement('div');
    const newImage = documenet.createElement('div');
    const newAuthorName = documenet.createElement('span');


    //set class names

    newCard.classList.add('card');
    newHeadline.classList.add('headline');
    newAuthor.classList.add('author');
    newImage.classList.add('img-container');

    //set content

    newHeadline.textContent = `${data.headline}`
    newImage.src = `${data.authorPhoto}`
    newAuthorName.textContent = `${data.authorName}`

    //setup strcuture of elements

    newCard.appendChild(newHeadline);
    newCard.appendChild(newAuthor);
    newAuthor.appendChild(newImage);
    newAuthor.appendChild(newAuthorName);

    return newCard;
};