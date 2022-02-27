//object.keys(objectName)
//object er property gular name gulo ekta array hisebe return korbe ei method er madhome
//object.values(objectName)
//object er property gular value gulo ekta array hisebe return korbe ei method er madhome
const bottle = {
    color: "blue",
    hold: "water",
    price: 150,
    isCleaned : true
}
//getting all the properties name
const keys = Object.keys(bottle);
//getting all the  values
const values = Object.values(bottle);

console.log(keys);
console.log(values);
//get all pairs
const pairs = Object.entries(bottle);
console.log(pairs);
//seal maira dile r object theke kichu delete kora jabe na, but property r value update kora jai
Object.seal(bottle)
//freez ta o seal er moto , kintu r modifi or r kichu kora jabe na
Object.freeze(bottle)
//Delete Object property(delete objName.property)
delete bottle.isCleaned;
console.log(bottle);

