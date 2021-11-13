
// get input fields
const nameInput = document.getElementById('name');
// const yearInput = document.getElementById('year');
const dateInput = document.getElementById('date');
const genderInput = document.getElementById('gender');

// add event listener
form.addEventListener('submit',getInputDetails);

function getInputDetails(e){

let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

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
} else if(day == 'Sunday' && genderInput.value == 'female'){
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
} else if(day == 'Monday' && genderInput.value == 'male'){
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
} else if(day == 'Monday' && genderInput.value == 'female'){
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
} else if(day == 'Tuesday' && genderInput.value == 'male'){
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
} else if(day == 'Tuesday' && genderInput.value == 'female'){
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
} else if(day == 'Wednesday' && genderInput.value == 'male'){
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
} else if(day == 'Wednesday' && genderInput.value == 'female'){
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
} else if(day == 'Tuesday' && genderInput.value == 'female'){
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
} else if(day == 'Tuesday' && genderInput.value == 'female'){
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
} else if(day == 'Thursday' && genderInput.value == 'male'){
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
} else if(day == 'Thursday' && genderInput.value == 'female'){
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
} else if(day == 'Friday' && genderInput.value == 'male'){
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
} else if(day == 'Friday' && genderInput.value == 'female'){
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
} else if(day == 'Saturday' && genderInput.value == 'male'){
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
} else if(day == 'Saturday' && genderInput.value == 'female'){
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

