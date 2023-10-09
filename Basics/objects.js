const mySym = Symbol('key1');
const obj = {
    id:11,
    'full name':'kajal gaharwal',
    age:26,
    email:'kajal@gmail.com',
    [mySym]:'mykey1',
}
// console.log(obj.id);
// console.log(obj['full name']);
// console.log(obj[mySym]);
// obj.email = 'kajal.yahoo.com';
// Object.freeze(obj);
// obj.email = 'kajal.hotmail.com';
// console.log(obj);

obj.greetings = function(){
    console.log('hello!! I m greeting function');
}
// obj.greetings();

obj.greetingsTwo = function(){
    console.log(`hello!! I m greeting function, ${this["full name"]}`);
}
// obj.greetingsTwo();

const newObj = new Object();
newObj.id=1;
newObj.name='kajal gaharwal';
const regularObj = {
    fullname :{
        userFullName:{
            firstName:'kajal',
            lastName:'gaharwal'
        }
    }
}
// console.log( regularObj.fullname.userFullName.firstName)

const ob1 = {1:'a',2:'b'};
const ob2 = {3:'c',4:'d'};
// const ob3 = Object.assign({},ob1,ob2);
const ob3 = {...ob1,...ob2};
// console.log(ob3);
console.log(Object.keys(newObj));
console.log(Object.values(newObj));