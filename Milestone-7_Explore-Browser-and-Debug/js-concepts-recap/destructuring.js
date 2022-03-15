const employe={
    id: 163002029,
    name: 'Junayed',
    ide: 'VS Code',
    laguages: ['HTML','CSS','JavaScript','Python'],
    specification:{
        height: 70,
        weight: 75,
        drink:'Water',
        watch:{
            brand:'Apple',
            nameW: 'Apple Watch Seris 4'
        }
    }
}
const {name,ide} = employe;
console.log(name);
const {weight,drink} = employe.specification;
console.log(weight);
const {brand,nameW} = employe?.specification?.watch;
console.log(nameW);
const [languages]= employe.laguages;
console.log(languages);
console.log(employe.id);
console.log(employe['id']);
const keys = Object.keys(employe);
console.log(keys);
const values = Object.values(employe);
console.log(values);
console.log("hello");
for (const key in employe) {
    console.log(key);
}
for (const key in employe) {
    console.log(employe[key]);
}
