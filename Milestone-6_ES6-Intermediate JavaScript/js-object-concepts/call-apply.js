const kibria = {
    id: 101,
    name: "Kibaria",
    money: 1000,
    treatDay: function (expense,boksis,tax) {
      this.money = this.money - expense - boksis - tax;
      console.log(this);
      return this.money;
    },
  };
  const heroBalam = {
    id: 102,
    name: "HeroBalam",
    money: 500,
  };
  const normalGolam = {
    id: 102,
    money: 8000,
    name: "Normal Golam",
  };
  //call ...eita bind er motoi kaj kore ...r eita hoche direct function ta k call kore use kore, r hoche perameter gula k komma diya diya dite hoi
  kibria.treatDay.call(heroBalam,100,20,50);
  //apply ...eita call er motoi kaj kore , kintu perameter gula k array r modhe pathaite hoi
  kibria.treatDay.apply(normalGolam,[100,20,50]);