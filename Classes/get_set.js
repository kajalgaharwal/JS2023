class user{
    constructor(email,password){
        this.email = email;
        this.password = password;
    }
    get password(){
        return this._password.toUpperCase();
    }
    set password(value){
        this._password = value;
    }
}

const createdUser = new user('kajal@gmail.com','abc');
console.log(createdUser.password);