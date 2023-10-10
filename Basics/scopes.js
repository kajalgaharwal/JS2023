// let a =300;
// if(true){
//     let a = 30
//     console.log('inner a: ',a);
// }
// console.log('Outer a: ',a);

function one(){
    const username ='kajal';
    function Two(){
        const website = 'youtue';
        console.log(username);
    }
    // console.log(website);
    Two();
}
// one();


if(true){
    const username = 'kajal';
    if(username==='kajal'){
        const website = 'youtube';
        console.log(username+ website);
    }
    // console.log(website);
}
// console.log(username);

console.log(addOne(5));
function addOne(num){
    return num+1;
}

const addTwo = function addOne(num){
    return num+2;
}
console.log(addTwo(5));