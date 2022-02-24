function megafriend(friends){
    if(Array.isArray(friends) == false){
        return "Please Provide an Array"
    }
    if (friends.indexOf("Ami") != -1) {
        console.log("Ami Exist");
    }
    if (friends.includes('Foysal')) {
        console.log("Foysal Exist");
    }
    let mega = friends[0];
    for (const friend of friends) {
        if (friend.length>mega.length) {
            mega = friend;
        }
    }
    return mega;
}
const friends = ['Ami','Foysal','Shihaab','Shojol']
console.log(megafriend(friends));
const first = ['1','2']
const second = ['3','4']
const combine = first.concat(second);
console.log(combine);
