import mongoose, {Schema, model} from "mongoose";

import Theater from "../interface/theater";

const movieSchema: Schema= new Schema({
    title:{type:String,required:true},
    sinopsis:{type:String,default:"N/A"},
    genres: {type:[String],default:"N/A"},
    pgRating:{type:String,required:true},
    duration:{type:String,required:true},
    imgs: {type:[String],default:"N/A"},
    trailers:{type:[String],default:"N/A"}
})

export default model<Theater>('Movies',movieSchema)