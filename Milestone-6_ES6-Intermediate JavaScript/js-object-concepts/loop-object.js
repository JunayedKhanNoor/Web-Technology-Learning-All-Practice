const student = {
    id: 101,
    money: 5000,
    name: "RJ Kibria",
    major: "Mathametics",
    isRich: false,
    subject: ["english", "ICT", "Botany"],
    bestFriend: {
      name: "Kalu",
      major: "Mathematics",
    },
    takeExam: function () {
      console.log(this.name, "Taking Exam!");
    },
    treatDay: function (expense, boksis) {
      this.money = this.money - expense - boksis;
      return this.money;
    },
  };
  const bottle = {
    color: "blue",
    hold: "water",
    price: 150,
    isCleaned : true
}
/* 
for(let i = 0; i<10;i++){}
for(const num of numbers){} // array
for(const prop in student){} // object
*/
for (const key in bottle) {
    //console.log(key+':'+bottle[key]);
}
for (const key in student) {
    //console.log(key+':'+student[key]);
}
const keys = Object.keys(bottle);
for (const key of keys) {
    //console.log(key);
}
//advanced
//const entries = Object.entries(bottle);
for (const [key,value] of Object.entries(student)) {
    console.log(key, value);
}
for (const [key,value] of Object.entries(bottle)) {
    console.log(key, value);
}