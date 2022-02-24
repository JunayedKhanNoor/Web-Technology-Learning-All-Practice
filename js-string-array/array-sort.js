const number = [1, 3, 2, 3, 2,33, 4, 5,66, 9, 6, 75, 4];
const sortedNumbers = number.sort(function(a,b){
    return a-b;
});
console.log(sortedNumbers);
const friends = ["kabli", "josim", "asam", "dipjol"];
//const sortedFriends = friends.sort();
//console.log(sortedFriends);
const reversedFriends = friends.reverse();
//console.log(reversedFriends);
const reversedNumber = sortedNumbers.reverse();
console.log(reversedNumber);