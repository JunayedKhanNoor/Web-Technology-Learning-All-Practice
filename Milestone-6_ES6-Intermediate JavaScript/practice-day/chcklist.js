//Task 01
const myObjecty ={
    id: 163002029,
    name: "Mohammad Junayed Khan Noor",
    favNumber: [0,1,3,5,7,77,22],
    family:{
        father: "Kamrul Islam Noor",
        mother: "Shamim Ara Begum",
        brother: "Jobayer Khan Noor",
        niece: "Wania Noor"
    },
    fullFamilyMembersName: function(){
        return "Father:"+ this.family.father +", Mother:"+ this.family.mother;
    }
}
console.log(myObjecty.fullFamilyMembersName());
//Task 2
const string = `My Name is ${myObjecty.name} and my ID is ${myObjecty.id}.
My fathers name is ${myObjecty.family.father}`
console.log(string);
const{father,mother} =  myObjecty.family;
console.log(father,mother);
//const myNumber = myObjecty.favNumber[1];
const myNumber = `${myObjecty.favNumber[1]}`;
console.log(myNumber);

//Task 3.1
const number = () => 89;
console.log(number());
//Task 3.2
const number2 = (n) => n/7;
console.log(number2(49));
//Task 3.2
const number3 = (a,b) => (a+b)/2;
console.log(number3(3,3));
//Task 3.2
const number4 = (a,b) => {
    return a+7+b+7
};
console.log(number4(3,3));
//task 4
const myArray = [1,7,8,9,43,4,6,8,9,6,5,67,78,8,5,5,7];
const temp = myArray.map(x=>(x/7));
console.log(temp);
//task 6
const {id,name,favNumber} = myObjecty;
console.log(id, name, favNumber);