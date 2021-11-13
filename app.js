
// get input fields
const nameInput = document.getElementById('name');
// const yearInput = document.getElementById('year');
const dateInput = document.getElementById('date');
const genderInput = document.getElementById('gender');

// add event listener
form.addEventListener('submit',getInputDetails);

function getInputDetails(e){

days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

const d = new Date(dateInput.value);

let day = days[d.getDay()];

if(day == 'Sunday' && genderInput.value == 'male'){
    // create element
    const h6 = document.createElement('h6');
    // add class 
    h6.className = 'alert alert-success text-center';
    // text node
    h6.appendChild(document.createTextNode(`Thank you ${nameInput.value}, your Akan name is Kwasi.`));
    // search container
    const searchContainer = document.querySelector('.searchContainer');
    // search box
    const search = document.querySelector('.search');
    // insert text
    searchContainer.insertBefore(h6,search);
}





e.preventDefault();
}

