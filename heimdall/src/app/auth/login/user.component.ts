export class User {
    public _id:string;
    public username: string;
    public email:string;
    public password:string;
    public userStorage:Object;

    constructor(id:string, username:string, email:string, password:string) {
        this._id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.userStorage = {};
    }

}

export class Anonymous {
    public username: string;
    public password:string;

    constructor(username:string, password:string) {
        this.username = username;
        this.password = password;
    }

}
