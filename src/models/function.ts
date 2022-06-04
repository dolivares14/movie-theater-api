import mongoose, {Schema,model} from "mongoose"
import MovieFunction from "../interface/function"

const functionSchema= new Schema({
    movie:{type:String,required:true},
    duration:{type:String,required:true},
    available:{type:[Map],for:String},
    startingTime:{type:Date,required:true},
    endingTime:{type:Date,required:true},
    functionType:{type:String,required:true}
})

export default model<MovieFunction>('MovieFunction',functionSchema)
