import mongoose,{model,Schema} from "mongoose";

import User from "../interface/users";
const userSchema= new Schema({
    username:{type:String,required:true},
    password:{type:String,required:true},
    fullName:{type:String,required:true},
    registerDate:{type:Date},
    isAdmin:Boolean,
    age:Number,
    identification:Number,
    email:{type:String,required:true},
    phoneNumber:{type:String,required:true},
    securityQuestions:{type:[Map],for:String}

})

export default model<User>('user',userSchema)