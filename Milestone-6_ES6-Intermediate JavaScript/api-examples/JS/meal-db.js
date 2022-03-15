//Enter marle button click hoi jabe
/* const searchBtn = document.getElementById("button-search");
const searchInput = document.getElementById("search-field");

searchInput.addEventListener("keyup", function (event) {
  event.preventDefault();
  if (event.keyCode == 13) searchBtn.click();
}); */
//kaj ses click er
//another way better way
const searchBtn = document.getElementById("button-search");
const searchInput = document.getElementById("search-field");

searchInput.addEventListener("keypress", function (event) {
  // event.preventDefault(); ---eita jhamela kora default sob off kore
  if (event.key == 'Enter'){
    searchBtn.click();
  }
});
//another way done
document.getElementById("error-message").style.display = "none";
const searchFood = () => {
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  searchField.value = "";
  document.getElementById("error-message").style.display = "none";
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
  fetch(url)
    .then((res) => res.json().then((data) => displaySearchResult(data.meals)))
    .catch((error) => displayError(error));
};
const displayError = (error) => {
  document.getElementById("error-message").style.display = "block";
};
const displaySearchResult = (meals) => {
  const searchResult = document.getElementById("search-result");
  /* previous search gulare clear korefeltesi, bad way,momory leak kore
  searchResult.innerHTML= ''; */
  //another way...eita keo keo bole kora jete pare, vitorer text content gulare empty kore deowa
  searchResult.textContent = "";
  //eibar hoilo jodi search kore kichu na paowa jai taile kichu ekta message dekhano
  /* if(meals.length ==0){
    const h3 = document.createElement("h3") ;
    h3.innerText= "No Result Found!!" ;
    console.log(h3);
    searchResult.appendChild(h3);
  }  */
  //tarpor as usual kaj
  meals.forEach((meal) => {
    //console.log(meal);
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
    <div onclick="loadMealDetails(${meal.idMeal})" class="card">
          <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">
              ${meal.strInstructions.slice(0, 150)}
            </p>
          </div>
        </div>
    `;
    searchResult.appendChild(div);
  });
};
const loadMealDetails = (mealId) => {
  //console.log(mealId);
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMealDetail(data.meals[0]));
};
const displayMealDetail = (meal) => {
  console.log(meal);
  const mealDetails = document.getElementById("meal-details");
  const div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text"> ${meal.strInstructions.slice(0, 150)}</p>
              <a href="${
                meal.strYoutube
              }" class="btn btn-primary">Go somewhere</a>
            </div>
    `;
  mealDetails.appendChild(div);
};
