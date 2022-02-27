const kibria = {
  id: 101,
  name: "Kibaria",
  money: 1000,
  treatDay: function (expense) {
    this.money = this.money - expense;
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

//console.log(kibria.treatDay(100));
//bind er kaj hoilo onno ekta object er methood or function k r ekta object a use kora
//bind hoche opi function ta k biand kore notun ekta function banai, r seta k call kore kore use korte hoi
kibria.treatDay(100);
const balamTreatDay = kibria.treatDay.bind(heroBalam);
balamTreatDay(20);
const golamTreatDay = kibria.treatDay.bind(normalGolam);
golamTreatDay(2000);

