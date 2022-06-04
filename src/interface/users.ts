export default interface User{
    username:string;
    password:String;
    fullName:String;
    registerDate:Date
    isAdmin:boolean;
    age:number;
    identification:number;
    email:string;
    phoneNumber:string;
    securityQuestions:{}[]
}