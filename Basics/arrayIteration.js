const number = [1,2,3,4,5];
for (const num of number) {
    // console.log(num);
    
}
const greeting = 'hello world!';
for (const greet of greeting) {
    // console.log(greet);
}

//MAP

const map = new Map();
map.set('IN','INDIA');
map.set('USA','United State of America');
map.set('FR','France');
// for (const [key,value] of map) {
//     console.log(key +':'+value);
// }


//Oject //for in loop


const obj = {
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'by apple'
}
// for (const key in obj) {
//         console.log(obj[key] ,key);
// }

//forEach


// const coding = ['python','js','cpp','c','java','ruby'];
// coding.forEach(function (item,index,arr){
//     console.log(item,index,arr);
// })

// coding.forEach((item)=> {
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)


// const coding = [
//     {
//         langName:'javascript',
//         langFile:'js'
//     },
//     {
//         langName:'java',
//         langFile:'java'
//     },
//     {
//         langName:'ruby',
//         langFile:'rb'
//     },
//     {
//         langName:'C++',
//         langFile:'cpp'
//     }
// ]

// coding.forEach((item)=>{
//     console.log(item);
// })


//filter

const numbers = [1,2,3,4,5,6,7,8,9,10];
// const myNums = numbers.filter( (num)=> {
//     return num>4;
// } )
// console.log(myNums);

//map chaining


// const newNum = number.map( (num)=> num*10 ).map((num)=> num+1).filter((num)=> num>40);
// console.log(newNum);

//reduce
const newNum = numbers.reduce((acc,curr)=>acc+curr,0);
console.log(newNum);

const courseObj = [
    {
        courseName:'js',
        fee: 2999
    },
    {
        courseName:'cpp',
        fee: 1999
    },
    {
        courseName:'java',
        fee: 3999
    },
    {
        courseName:'python',
        fee: 4999
    }
]
const totalFee = courseObj.reduce((acc,item)=> acc + item.fee ,0);
console.log(totalFee);