//error message
document.getElementById("error-message").style.display = "none";
//spinner
document.getElementById("spinner").style.display = "none";
const searchFood = () => {
  //ekta container k khali korlam
  const mealContainer = document.getElementById("meal-container");
  mealContainer.textContent = "";

  //spinner show
  document.getElementById("spinner").style.display = "block";
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  searchField.value = "";
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMeal(data.meals))
    .catch((error) => displayeError(error));
};
const displayeError = (error) => {
  document.getElementById("spinner").style.display = "none";
  document.getElementById("error-message").style.display = "block";
};
const displayMeal = (meals) => {
  document.getElementById("spinner").style.display = "none";
  document.getElementById("error-message").style.display = "none";
  const cardContainer = document.getElementById("card-container");
  cardContainer.textContent = "";
  meals.forEach((meal) => {
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
        <div onclick="loadMealDetail(${meal.idMeal})" class="card h-100">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <h5 class="card-title">${meal.idMeal}</h5>
          <p class="card-text">${meal.strInstructions.slice(0, 190)}</p>
        </div>
      </div>
      `;
    cardContainer.appendChild(div);
  });
};
const loadMealDetail = (id) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMealDetail(data.meals[0]));
};
const displayMealDetail = (meal) => {
  const mealContainer = document.getElementById("meal-container");
  mealContainer.textContent = "";
  const div = document.createElement("div");
  div.innerHTML = `
  <div class="card text-center mb-3">
          <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <a href="${meal.strYoutube}" target="_blank" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>`;
  mealContainer.appendChild(div);
};
