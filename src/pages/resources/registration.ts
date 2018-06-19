let userArray = [];
export default userArray;

export class User{
    userName;
    password;

    constructor(UserName, Password){
        this.userName = UserName;
        this.password = Password;
    }
}