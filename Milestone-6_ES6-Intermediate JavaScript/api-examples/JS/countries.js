const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};
loadCountries();
const displayCountries = countries =>{
    /* for (const country of countries) {
        console.log(country);
    } */
    const countrySection = document.getElementById('countries');
    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
        <h3>${country.name.official}</h3>
        <p>${country.capital}</p>
        <button onclick="loadCountryByName('${country.name.official}')">Details</button>
        `
        /* const h3 = document.createElement('h3');
        const p = document.createElement('p');
        h3.innerText = country.name.official;
        p.innerText = country.capital;
        div.appendChild(h3);
        div.appendChild(p); */
        countrySection.appendChild(div);
    });
}
const loadCountryByName = name =>{
    const url = `https://restcountries.com/v3.1/name/${name}`
    //console.log(url);
    fetch(url)
    .then(res=>res.json())
    .then(data =>displayCountryDetail(data[0]))
}
const displayCountryDetail = country =>{
    const countryDiv = document.getElementById('country-detail');
    countryDiv.innerHTML=`
    <h5>${country.name.official}</h5>
    <p>${country.population}</p>
    <img src="${country.flag}">
    `
}