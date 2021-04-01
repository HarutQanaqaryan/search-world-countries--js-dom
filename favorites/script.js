const allCoutries = document.querySelector(".countries");
const emptyFavoritList = document.querySelector(".empty");
const logOutLogin = document.querySelector(".log-out")


const getFavoritCountries = () => {
  const allKeys = Object.keys(localStorage)
  const clearAll = document.createElement('p');
  allKeys.forEach((item) => {
    emptyFavoritList.style.display = "none"
      const favoritList = document.createElement("div");
      const removeFavorit = document.createElement("img");

      favoritList.classList.add("countries");
      removeFavorit.classList.add('remove-icon')

      removeFavorit.setAttribute("src", "../img/remove-favorit.png");
      favoritList.innerHTML = localStorage.getItem(item)

      favoritList.append(removeFavorit)
      allCoutries.append(favoritList); 
      clearAll.textContent = "Clear All";
      clearAll.classList.add("clear-all")
      allCoutries.append(clearAll);

      removeFavorit.addEventListener("click", (event) => {
             localStorage.removeItem(item);
             location.reload();
      })
      clearAll.addEventListener("click", () => {
           localStorage.clear();
           location.reload();
      })

  })   
};

window.onload = () => {
    getFavoritCountries();
}

