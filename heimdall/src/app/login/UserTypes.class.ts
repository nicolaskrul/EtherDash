export class User {
    private _id:string;
    private username: string;
    private email:string;
    private password:string;

    constructor(id:string, username:string, email:string, password:string) {
        this._id = id;
        this.username = username;
        this.email = email;
        this.password = password;
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
