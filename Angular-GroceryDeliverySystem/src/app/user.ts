export class User {
    userId:number;
    userName:String;
    first_name:String;
    last_name:String;
    mobile_no:String;
    password:String;
    email_id:String;
    tem_address:String;
    per_address:String;
    role:String;
    constructor(
         userId:number,
         userName:String,
         first_name:String,
         last_name:String,
         mobile_no:String,
         password:String,
         email_id:String,
         tem_address:String,
         per_address:String,
         role:String
    ){
        this.userId=userId;
        this.userName=userName;
        this.first_name=first_name;
        this.last_name=last_name;
        this.mobile_no=mobile_no;
        this.password=password;
        this.email_id=email_id;
        this.tem_address=tem_address;
        this.per_address=per_address;
        this.role=role;
    }

}
