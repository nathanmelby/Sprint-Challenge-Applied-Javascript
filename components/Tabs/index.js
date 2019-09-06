// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


//Entrypoint

const tabsEntry = document.querySelector('.topics')


//Topic API

axios.get('https://lambda-times-backend.herokuapp.com/topics')

.then(response => {
    // console.log(response.data);
    response.data.topics.forEach(item => {
        const newTopicTitle = createTabs(item)
        tabsEntry.appendChild(newTopicTitle);
    });
});


function createTabs(data) {

    const newTab = document.createElement('div');

    //set class name

    newTab.classList.add('tab');

    //set content
    newTab.textContent = `${data}`

    return newTab;
}