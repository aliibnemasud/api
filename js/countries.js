const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => allcountryies(data));
}

loadCountries();


const allcountryies = conutries => {

    const countryContainer = document.getElementById('all-countries');
    

    /* for (const country of conutries){
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `<h1>${country.name.common}</h1>`;
        countryContainer.appendChild(div); 

    } */

    conutries.forEach(country => {
        // console.log(country);
        const div = document.createElement('div');
        const p = document.createElement('p');
        const h3 = document.createElement('h3');
        const h2 = document.createElement('h2');
        const button = document.createElement('a');
        h2.innerText = country.name.common;
        p.innerText = country.capital;
        button.innerHTML = `<button class="btn btn-primary" onClick="loadDetails('${country.name.common}')">More Dtails</button>`;

        // h3.innerText = country.name.nativeName.cnr.official; // (why it is not working)

        div.appendChild(h2);
        div.appendChild(p);
        div.appendChild(h3);
        div.appendChild(button);

        div.classList.add('country');        
        // div.innerHTML = `<h1>${country.name.common}</h1>`;
        countryContainer.appendChild(div);
    })    
} 




function loadDetails(name) {
    const url = `https://restcountries.com/v3.1/name/${name}`;
    fetch(url)
    .then(res => res.json())
    .then(data => conutriesDetails(data[0]));
    console.log(name);
    console.log(url);
    console.data(data);
}

function conutriesDetails() {

    console.log(data);
    
    const contryDetails = document.getElementById('country-details');

    contryDetails.innerHTML = `
        <h1>${data}</h1>
    `;
}