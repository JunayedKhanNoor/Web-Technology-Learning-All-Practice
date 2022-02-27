const first = {name:'Junayed', age: 22}
const second = { age: 22, name:'Junayed'}
function compareObject(obj1,obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false
    }
    for(const prop in obj1){
        if(obj1[prop] !== obj2[prop]){
            return false
        }
    }
    return true
}
const isEqual = compareObject(first,second);
console.log(isEqual);