
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

// sunday male

if(day == 'Sunday' && genderInput.value == 'male'){
    // clear alert
    clearAlert();
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

    // sunday female
} else if(day == 'Sunday' && genderInput.value == 'female'){
    // create element
    const h6 = document.createElement('h6');
    // add class 
    h6.className = 'alert alert-success text-center';
    // text node
    h6.appendChild(document.createTextNode(`Thank you ${nameInput.value}, your Akan name is Akosua.`));
    // search container
    const searchContainer = document.querySelector('.searchContainer');
    // search box
    const search = document.querySelector('.search');
    // insert text
    searchContainer.insertBefore(h6,search);

    // moday male
} else if(day == 'Monday' && genderInput.value == 'male'){
     // create element
     const h6 = document.createElement('h6');
     // add class 
     h6.className = 'alert alert-success text-center';
     // text node
     h6.appendChild(document.createTextNode(`Thank you ${nameInput.value}, your Akan name is Kwadwo.`));
     // search container
     const searchContainer = document.querySelector('.searchContainer');
     // search box
     const search = document.querySelector('.search');
     // insert text
     searchContainer.insertBefore(h6,search);

    //  monday female
} else if(day == 'Monday' && genderInput.value == 'female'){
    // create element
    const h6 = document.createElement('h6');
    // add class 
    h6.className = 'alert alert-success text-center';
    // text node
    h6.appendChild(document.createTextNode(`Thank you ${nameInput.value}, your Akan name is Adwoa.`));
    // search container
    const searchContainer = document.querySelector('.searchContainer');
    // search box
    const search = document.querySelector('.search');
    // insert text
    searchContainer.insertBefore(h6,search);
    // tuesday male
} else if(day == 'Tuesday' && genderInput.value == 'male'){
    // create element
    const h6 = document.createElement('h6');
    // add class 
    h6.className = 'alert alert-success text-center';
    // text node
    h6.appendChild(document.createTextNode(`Thank you ${nameInput.value}, your Akan name is Kwabena.`));
    // search container
    const searchContainer = document.querySelector('.searchContainer');
    // search box
    const search = document.querySelector('.search');
    // insert text
    searchContainer.insertBefore(h6,search);
    // tuesday female
} else if(day == 'Tuesday' && genderInput.value == 'female'){
    // create element
    const h6 = document.createElement('h6');
    // add class 
    h6.className = 'alert alert-success text-center';
    // text node
    h6.appendChild(document.createTextNode(`Thank you ${nameInput.value}, your Akan name is Abenaa.`));
    // search container
    const searchContainer = document.querySelector('.searchContainer');
    // search box
    const search = document.querySelector('.search');
    // insert text
    searchContainer.insertBefore(h6,search);
// wednesday male
} else if(day == 'Wednesday' && genderInput.value == 'male'){
    // create element
    const h6 = document.createElement('h6');
    // add class 
    h6.className = 'alert alert-success text-center';
    // text node
    h6.appendChild(document.createTextNode(`Thank you ${nameInput.value}, your Akan name is Kwaku.`));
    // search container
    const searchContainer = document.querySelector('.searchContainer');
    // search box
    const search = document.querySelector('.search');
    // insert text
    searchContainer.insertBefore(h6,search);
// wednesday female
} else if(day == 'Wednesday' && genderInput.value == 'female'){
    // create element
    const h6 = document.createElement('h6');
    // add class 
    h6.className = 'alert alert-success text-center';
    // text node
    h6.appendChild(document.createTextNode(`Thank you ${nameInput.value}, your Akan name is Akua.`));
    // search container
    const searchContainer = document.querySelector('.searchContainer');
    // search box
    const search = document.querySelector('.search');
    // insert text
    searchContainer.insertBefore(h6,search);
// thursday male
} else if(day == 'Thursday' && genderInput.value == 'male'){
    // create element
    const h6 = document.createElement('h6');
    // add class 
    h6.className = 'alert alert-success text-center';
    // text node
    h6.appendChild(document.createTextNode(`Thank you ${nameInput.value}, your Akan name is Yaw.`));
    // search container
    const searchContainer = document.querySelector('.searchContainer');
    // search box
    const search = document.querySelector('.search');
    // insert text
    searchContainer.insertBefore(h6,search);
// thursday female
} else if(day == 'Thursday' && genderInput.value == 'female'){
    // create element
    const h6 = document.createElement('h6');
    // add class 
    h6.className = 'alert alert-success text-center';
    // text node
    h6.appendChild(document.createTextNode(`Thank you ${nameInput.value}, your Akan name is Yaa.`));
    // search container
    const searchContainer = document.querySelector('.searchContainer');
    // search box
    const search = document.querySelector('.search');
    // insert text
    searchContainer.insertBefore(h6,search);
// friday male
} else if(day == 'Friday' && genderInput.value == 'male'){
    // create element
    const h6 = document.createElement('h6');
    // add class 
    h6.className = 'alert alert-success text-center';
    // text node
    h6.appendChild(document.createTextNode(`Thank you ${nameInput.value}, your Akan name is Kofi.`));
    // search container
    const searchContainer = document.querySelector('.searchContainer');
    // search box
    const search = document.querySelector('.search');
    // insert text
    searchContainer.insertBefore(h6,search);
// friday female
} else if(day == 'Friday' && genderInput.value == 'female'){
    // create element
    const h6 = document.createElement('h6');
    // add class 
    h6.className = 'alert alert-success text-center';
    // text node
    h6.appendChild(document.createTextNode(`Thank you ${nameInput.value}, your Akan name is Afua.`));
    // search container
    const searchContainer = document.querySelector('.searchContainer');
    // search box
    const search = document.querySelector('.search');
    // insert text
    searchContainer.insertBefore(h6,search);
// saturday male
} else if(day == 'Saturday' && genderInput.value == 'male'){
    // create element
    const h6 = document.createElement('h6');
    // add class 
    h6.className = 'alert alert-success text-center';
    // text node
    h6.appendChild(document.createTextNode(`Thank you ${nameInput.value}, your Akan name is Kwame.`));
    // search container
    const searchContainer = document.querySelector('.searchContainer');
    // search box
    const search = document.querySelector('.search');
    // insert text
    searchContainer.insertBefore(h6,search);
// saturday female
} else if(day == 'Saturday' && genderInput.value == 'female'){
    // create element
    const h6 = document.createElement('h6');
    // add class 
    h6.className = 'alert alert-success text-center';
    // text node
    h6.appendChild(document.createTextNode(`Thank you ${nameInput.value}, your Akan name is Ama.`));
    // search container
    const searchContainer = document.querySelector('.searchContainer');
    // search box
    const search = document.querySelector('.search');
    // insert text
    searchContainer.insertBefore(h6,search);
}

setTimeout(()=>{
    clearAlert();
},3000);

e.preventDefault();
}

function clearAlert(){
    const currentAlert = document.querySelector('.alert');
    if(currentAlert){
       currentAlert.remove();
    }
}


