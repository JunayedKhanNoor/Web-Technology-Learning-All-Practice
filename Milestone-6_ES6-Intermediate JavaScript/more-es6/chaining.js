//destructuring array
const [p,q] = [22,3,4];
console.log(p,q);

const [best, faltu] = ['momotaj', 'taheri'];
console.log(best, faltu);
//chaining
const myObject = {x: 2, y:50, z: 600, a: 25, b:68};
const {x,y} = myObject;
//eita k bole optional chaining ?.
// er mani hoilo jodi error khai seita handle hoye jabe, true hoile kaj korbe , naile korbe na 
console.log('myObject.p', myObject?.p?.q);

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
  console.log(company?.backend?.tech.third);
  console.log(company?.web?.tech.third);