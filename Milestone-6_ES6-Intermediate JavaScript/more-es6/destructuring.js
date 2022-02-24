const fish = {
  id: 58,
  name: "King Hilsha",
  price: 9000,
  phone: "013030303030",
  address: "Meghna",
  dress: "silver",
};
//old technique
/* const phone = fish.phone;
const price = fish.price;
const dress = fish.dress;
const name = fish.name; */

//new technique , object er akadhik value eksathe ber kore variable a rakhake destructuring bole
const { phone, price, dress, name } = fish;

console.log(price);
console.log(phone);
console.log(dress);
console.log(name);
console.log(price, name);

const company = {
  name: "GP",
  ceo: { id: 1, name: "ajmol", food: "coffee" },
  web: {
    work: "website Development",
    employee: 22,
    framework: "React",
    tech: {
      first: "html",
      second: "CSS",
      third: "js",
    },
  },
};
//old way
//const work = company.web.work;

//new way , shotcut way
const { work, framework } = company.web;
const { food } = company.ceo;
const {first, second} = company.web.tech
console.log(work, framework, food, first, second);
