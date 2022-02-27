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
const balance = student.treatDay(500,100);
console.log(balance);
