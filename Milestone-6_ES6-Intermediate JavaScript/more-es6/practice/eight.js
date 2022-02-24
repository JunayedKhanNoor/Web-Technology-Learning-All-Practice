//destructuring p--8
const company = {
  name: "GP",
  address: "Gulshan",
  mother_company: "Telenor",
  tech: {
    frontEnd: "React",
    backEnd: "Java Sping Boot",
    database: "SQL",
  },
};
const { name, address, mother_company } = company;
const { frontEnd, backEnd } = company.tech;
console.log(name, mother_company, frontEnd);
//p--9
const [one, two, three] = [0, 1, 2, 3, 4, 5, 6];
console.log(three);
//p-10
const myFunc = (x, y, z = 7) => x + y + z;
console.log(myFunc(1, 2));
//p--11
const companyEllon = {
  name: ["Tesla", "SpaceX", "Boring Company", "Star Link"],
  address: "California",
  mother_company: "SpaceX",
  techs: {
    frontEnd: "React",
    backEnd: "Java Sping Boot",
    database: "SQL",
    contribution: {
      rocket: "Falcon-9",
      work: "Rocket",
      web: {
        first: "html",
        second: "CSS",
        third: "js",
      },
    },
  },
};
console.log(companyEllon?.name[3]);
console.log(companyEllon?.name[2]);
//console.log(companyEllon?.name[8]);
console.log(companyEllon?.techs?.contribution?.work);
console.log(companyEllon?.techs?.contribution?.web);
console.log(companyEllon?.techs?.contribution?.web?.second);

