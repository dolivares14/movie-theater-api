import { Request,Response,NextFunction } from "express";
import movie from "../models/movie";



export const getMovies= async (req:Request,res:Response,NextFunction:NextFunction) =>{
    try {
        const Movies= await movie.find();
        return res.json(Movies)
    } catch (error) {
        console.error(error)   
    }
}

export const getMovie= async (req:Request,res:Response,next:NextFunction)=>{
    try {
        const search = await movie.findById(req.params.id)
        return res.json(search)
    } catch (error) {
        console.error(error)
    }
}



export const createMovie=async (req:Request,res:Response,next:NextFunction)=>{
    
    try {
        
        const {title,sinopsis,genres,pgRating,duration,imgs,trailers} = req.body

        const exist= await movie.findOne({title})
        if(exist)
            return res.status(404).json({message:"Movie already exist"})


        const newMovie= new movie({
            title,
            sinopsis,
            genres,
            pgRating,
            duration,
            imgs,
            trailers
        })

        const savedMovie= await newMovie.save()
        res.json(savedMovie)
    } catch (error) {
        console.error(error)
    }
}

export const updateMovie= async (req:Request, res:Response, next:NextFunction):Promise<Response>=>{
    const updatedMovie= await movie.findByIdAndUpdate(req.params.id,req.body,{
        new:true
    })
    if(!updatedMovie) return res.status(204).json();
    return res.json(updatedMovie)

}

export const deleteMovie= async (req:Request,res:Response,next:NextFunction)=>{
    const moviefound = await movie.findByIdAndDelete(req.params.id);

    if (!moviefound) return res.status(204).json();

    return res.json({message:"Movie deleted"});
}