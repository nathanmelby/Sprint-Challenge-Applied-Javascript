// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const insertHeader = document.querySelector('.header-container');

insertHeader.prepend(Header());

function Header() {
//define new elements

const theHeader = document.createElement('div');
const theDate = document.createElement('span');
const theTitle = document.createElement('h1');
const theTemp = document.createElement('span');

//set class names

theHeader.classList.add('header');
theDate.classList.add('date');
theTemp.classList.add('temp');

//add content

theDate.textContent = 'SMARCH 28, 2019';
theTitle.textContent = 'Lambda Times';
theTemp.textContent = '98°';

//set structure

theHeader.appendChild(theDate);
theHeader.appendChild(theTitle);
theHeader.appendChild(theTemp);

return theHeader

}
