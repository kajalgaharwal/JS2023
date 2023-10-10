const user = {
    username:'kajal',
    price:99999,
    welcomeMsg:function(){
        console.log( `hey ${this.username}!! Welcome`);
    }
}
console.log(this);
// user.welcomeMsg();
// user.username = 'anchal';
// user.welcomeMsg();

//this keyword not work with functions
// function chai(){
//     const username = 'kajal';
//     console.log(this.username)
// }
// chai();
// const chai = function(){
//     const username = 'kajal';
//     console.log(this.username)
// }
// chai();

//Arrow function
// const chai = ()=>{
//     const username = 'kajal';
//     console.log(this.username)
// }
// chai();

// const addTwo = (num1,num2)=>{
//     return num1+num2;
// }
// console.log(addTwo(2,3));

// const addTwo = (num1,num2)=>(num1+num2);
// console.log(addTwo(2,6));

const addTwo = (num1,num2)=>({username:'kajal'});
console.log(addTwo(2,6));