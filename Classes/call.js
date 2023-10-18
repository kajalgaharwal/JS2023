function setUsername(username){
    this.username = username;
    console.log('called');
}
function createUser(username,email,age){
    setUsername.call(this,username);
    this.email = email;
    this.age= age;
}
const user = new createUser('kajal','kajal@gmail.com',26);
console.log(user);