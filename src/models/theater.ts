import mongoose,{ Schema,model} from "mongoose";
import Theater from "../interface/theater"

const theaterSChema = new Schema({
    name:{type:String,required:true},
    capacity:{type:Number,required:true},
    type:{type:String,required:true},
    movieTheater:{type:String,required:true},
    working:{type:Boolean,default:true},
    img:{type:String,default:"N/A"}

});

export default model<Theater>('theater',theaterSChema) 