const dataLoader = () => {
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((res) => res.json())
    .then((data) => displayData(data));
};
dataLoader();
const displayData = (elements) => {
  const first100 = elements.slice(0, 99);
  const cardDiv = document.getElementById("card-container");
  for (const element of first100) {
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
     <div class="card h-100">
     <img onclick="imageDetails(${element.id})" src="${element.thumbnailUrl}" class="card-img-top" alt="...">
     <div class="card-body">
       <h5 class="card-title">ID: ${element.id}</h5>
       <p class="card-text">${element.title}</p>
     </div>
   </div>
     `;
    cardDiv.appendChild(div);
  }
};
const imageDetails = ID => {
    const url = `https://jsonplaceholder.typicode.com/photos/${ID}`;
    fetch(url)
    .then(res => res.json())
    .then(data =>displayDetails(data))
};
const displayDetails = (allData) =>{
    const cardDivDetails = document.getElementById("details-container");
    cardDivDetails.textContent =''
    const div = document.createElement('div');
    div.classList.add("col");
    div.innerHTML=`
    <div class="card h-100 w-100">
     <img onclick="imageDetails(${allData.id})" src="${allData.thumbnailUrl}" class="card-img-top" alt="...">
     <div class="card-body">
       <h5 class="card-title">ID: ${allData.id}</h5>
       <p class="card-text">${allData.title}</p>
     </div>
   </div>
    `
    cardDivDetails.appendChild(div);
}
