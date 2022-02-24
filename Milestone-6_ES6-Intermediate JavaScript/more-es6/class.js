// ekidhoroner onek gula object bananor jonno class use kora hoi
/* Class  likhe start korte hoi tarpor ekta nam dite hoi,
nam ta borohater okkhor diya start korte hoi
tarpor vitore property dite hoi, kono , hobe na ; dite hoi
*/
class Support {
  name;
  designation = "Support Web Dev";
  address = "BD";
  /* Jegula property r dynamically object banate hobe segular jonno constructor
    create korte hoi 
    "Class er vitor object er property gulo k access korar jonno this use korte hoi"*/
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
  /*  Class  er vitor function likha jai, kintu Function word ta likha jabe na*/
  startSession() {
    console.log(this.name, "start a support session");
  }
}

const aamir = new Support("Aamir Khan", "BD");
const salman = new Support("Solaiman Khan", "Dubai");
const sharuk = new Support("SRK Khan", "Dubai");
const akshay = new Support("Akshay Kumar", "Dubai");
aamir.startSession();
salman.startSession();
console.log(aamir, salman, sharuk, akshay);
// console.log(salman);
