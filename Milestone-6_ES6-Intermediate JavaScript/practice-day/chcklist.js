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