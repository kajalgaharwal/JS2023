// const promiseOne = new Promise((resolve,reject)=>{
//     setTimeout(function(){
//         console.log('promiseOne');
//         resolve();
//     },1000)
// })
// promiseOne.then(()=>{
//     console.log('promise One resolved!!');
// });

// new Promise((resolve,reject)=>{
//     setTimeout(function(){
//         console.log('promiseTwo');
//         resolve();
//     },1000)
// }).then(()=>{
//     console.log('promise Two resolved');
// })
// const promiseThree = new Promise((resolve,reject)=>{
//     setTimeout(function(){
//         console.log('promiseThree');
//         resolve({name:'kajal',email:'kajal@gmail.com'});
//     },1000)
// })
// promiseThree.then((user)=>{
//     console.log(user);
// })

// const promiseFour = new Promise((resolve,reject)=>{
//     setTimeout(function(){
//         let error=true;
//         if(!error){
//             resolve({name:'kajal',email:'kajal@gmail.com'});
//             console.log('promiseFour');
//         }  
//         else{
//             reject('Error:something went wrong!!');
//         }      
//     },1000)
// })
// promiseFour.then((user)=>{
//     console.log(user.name);
// }).catch((err)=>{
//     console.log(err);
// }).finally(()=>{
//     console.log('In finally block')
// })

// const promiseFive = new Promise((resolve,reject)=>{
//     setTimeout(function(){
//         let error=true;
//         if(!error){
//             resolve({name:'asyncawait kajal',email:'kajal@gmail.com'});
//             console.log('promiseFive');
//         }  
//         else{
//             reject('Error:something went wrong!!');
//         }      
//     },1000)
// })

// async function consumePromiseFive(){
//     try{
//         const response = await promiseFive;
//         console.log(response);
//     }
//     catch(err){
//         console.log(err);
//     }
// }

// consumePromiseFive();



// async function getAllUsers(){
//     try{
//         const response = await fetch('https://api.github.com/users/hiteshchoudhary');
//         const data= await response.json();
//         console.log(data);
//     }
//     catch(err){
//         console.log(err);
//     }
// }
// getAllUsers();

// const promiseSix = new Promise((resolve,reject)=>{
//     const response = fetch('https://api.github.com/users/hiteshchoudhary');
//     // const data = response.json();
//     resolve(response);
//     // console.log(data);
// })

// promiseSix.then((user)=>{
//     return user.json();
// }).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })

//short
// fetch('https://api.github.com/users/hiteshchoudhary').then((user)=>{
//     return user.json();
// }).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })