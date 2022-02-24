//async hoilo fetch er alternative
const searchFood = async () => {
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  searchField.value = "";
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
  //error handling
  try {
    const res = await fetch(url);
    const data = await res.json();
    displaySearchResult(data.meals);
  } catch (error) {
    console.log(error);
  }
  /*  fetch(url).then((res) =>
    res.json().then((data) => displaySearchResult(data.meals))
  ); */
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
//async , perameter er aage async likha dile eita ekta async function hoye jai
const loadMealDetails = async (mealId) => {
  //console.log(mealId);
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
  const res = await fetch(url);
  const data = await res.json();
  displayMealDetail(data.meals[0]);
  /*  fetch(url)
      .then(res => res.json())
      .then(data => displayMealDetail(data.meals[0])) */
};
const displayMealDetail = (meal) => {
  console.log(meal);
  const mealDetails = document.getElementById("meal-details");
  //clear kore nitesi
  mealDetails.textContent = "";
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
