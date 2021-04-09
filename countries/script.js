const searchCountry = document.querySelector(".search-country");
const allCoutries = document.querySelector(".countries");
const notFound = document.querySelector(".not-found");
const loader = document.querySelector(".loader");
const favoritesPage = document.querySelector(".favorites-page");
const favoritesHeader = document.querySelector(".favorites-header");
const allCountriesHeader = document.querySelector(".header");
const logOutLogin = document.querySelector(".log-out");

const getCountries = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((countries) => {
      loader.style.display = "block";
      renderCountries(countries);
      notFound.style.display = "none";
      loader.style.display = "none";
    })
    .catch((err) => {
      err = notFound.style.display = "block";
    });
};

const renderCountries = (countries) => {
  countries.forEach(({ name, flag, capital, nativeName, region }) => {
    const country = document.createElement("div");
    const countryName = document.createElement("div");
    const countryCapital = document.createElement("p");
    const natName = document.createElement("p");
    const countryRegion = document.createElement("p");
    const countryFlag = document.createElement("img");
    const addFavorit = document.createElement("img");
    const addedFavorites = document.createElement("p");

    addedFavorites.textContent = "Added to favorites";
    addedFavorites.classList.add("added-favorites");
    addedFavorites.style.display = "none";

    countryCapital.classList.add("info-countries");
    natName.classList.add("info-countries");
    countryRegion.classList.add("info-countries");
    country.classList.add("country");
    countryFlag.classList.add("country-img");
    addFavorit.classList.add("add-favorites");
    countryName.classList.add("country-name");

    addFavorit.setAttribute("src", "../img/add-to-favorites.png");
    countryFlag.setAttribute("src", flag);

    countryName.textContent = name;
    countryCapital.textContent = "Capital: " + capital;
    natName.textContent = "Native Name: " + nativeName;
    countryRegion.textContent = "Region: " + region;

    allCoutries.append(country);
    country.append(countryFlag, countryName, addFavorit, addedFavorites);
    countryName.append(countryCapital, natName, countryRegion);

    addFavorit.addEventListener("click", (event) => {
      addFavorit.style.display = " none";
      addedFavorites.style.display = "block";
      localStorage.setItem(countryName.textContent, country.outerHTML);
    });
  });
};

searchCountry.addEventListener("input", (event) => {
  const searchValue = event.target.value;
  allCoutries.innerHTML = "";
  if (searchValue != "") {
    getCountries(`https://restcountries.eu/rest/v2/name/${searchValue}`);
  } else {
    getCountries(`https://restcountries.eu/rest/v2/all`);
  }
});

window.onload = () => {
  getCountries(`https://restcountries.eu/rest/v2/all`);
};
