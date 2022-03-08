const displayLocalStorage = () =>{
  const cart =  getCart();
  for (const key in cart) {
    displayProduct(key,cart[key]);
  }
}
const addItem = () => {
  const nameFiled = document.getElementById("name");
  const priceFiled = document.getElementById("price");
  const name = nameFiled.value;
  const price = priceFiled.value;
  if (!name || !price) {
    return;
  }
  //Display
  displayProduct(name,price);
  //add Local  Storage
  addProductToCart(name,price);
  nameFiled.value='';
  priceFiled.value='';
};
const displayProduct = (name,price) =>{
  let list = document.getElementById("list");
  let li = document.createElement('li');
  li.classList.add('list-group-item');
  li.innerHTML =`
  <span class="fw-bold">Product: </span>${name} <span class="fw-bold">Price: </span> ${price}
  `
  list.appendChild(li);
}
const getCart = () =>{
  const cart = localStorage.getItem('cart');
  let cartObj;
  if (cart) {
    cartObj = JSON.parse(cart);
  }else{
    cartObj ={};
  }
  return cartObj;
}
const addProductToCart = (name,price) =>{
  const cart = getCart();
  if (cart[name]) {
    cart[name]+= Number(price)
  }else{
    cart[name]=Number(price);
  } 
   //  cart[name]=Number(price);
  
  
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart",cartStringified);
}
const clearCart = () =>{
  localStorage.removeItem("cart");
  document.getElementById('list').textContent='';
}
displayLocalStorage();
