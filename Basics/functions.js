// function myName() {
//     console.log('kajal');
// }

// // myName()
// function calc(num1,num2){
//     return num1+num2;
// }
function userNameLoggedIn(username){
    if(!username){
        console.log('Enter username first');
        return ;
    }
    return username;
}
// const result = calc(3,5);
// console.log(result);
// const result = userNameLoggedIn('');
// console.log(result);

//REST operator

// function calculateCartPrice(val1,val2,...num1){
//     return num1;
// }
// console.log(calculateCartPrice(20,30,40,50,60));

//handle object

// const user = {
//     username:'kajal',
//     price:199
// }
// function handleObject(anyObject){
//     return `username is ${anyObject.username} and price is ${anyObject.price}`;
// }
// console.log(handleObject(user));

//handle Array


const myArray = [20,30,40,50];
function handleArray(myArr){
    return myArr[1];
}
console.log(handleArray(myArray));