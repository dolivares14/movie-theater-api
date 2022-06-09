import { Request, Response } from "express";
import _function from "../models/function";
import movie from "../models/movie";
import theater from "../models/theater";
import Theater from "../interface/theater";
import Function from "../interface/function"

const validateFunction  = async (added:Function): Promise<{ val: boolean; msg: string; }> =>{
    // validations

        // search for the movie
        const searchmovie = await movie.findById(added.movie)
        if(!searchmovie) return {val:false,msg:"Movie not found"}

        // search for the theater
        const searchtheater = await theater.findById(added.roomname)
        if(!searchtheater) return {val:false,msg:"Theater Room not found"}

        // theater availability
        if(!searchtheater.working) return {val:false,msg:"Theater room is not available"}

        // Check time Overlap
        const allfunctions= await _function.find()
        for(let i=0;i<allfunctions.length;i++){
            const startB = allfunctions[i].startingTime
            const endB= allfunctions[i].endingTime
            if(added.startingTime<=endB && added.endingTime>= startB) return {val:false,msg:"There is already a function at the specified time, check the calendar for more info"}
        }


        return {val:true, msg: "the function is valid"}
}

export const getfunctions= async (req:Request,res:Response) =>{
    try {
        const allfunctions= await _function.find()
        return res.json(allfunctions)
    } catch (error) {
        console.log(error)
    }
}

export const getfunction = async (req:Request, res:Response)=>{
    try {
        const searched= await _function.findById(req.params.id)
        return res.json(searched)
    } catch (error) {
        console.error(error)
    }
}

export const addfunction = async (req:Request,res:Response) =>{
    try {
        const functionInserted= req.body

        

        const validation = await validateFunction(functionInserted)

        if(!validation.val){
            return res.json(`There was a problem!: ${validation.msg} `)
        }
        const newFunction= new _function(functionInserted)
       
        const saved = await  newFunction.save()
        return res.json(saved)
    } catch (error) {
        console.error(error)
    }
}

export const deletefunction= async (req:Request,res:Response) =>{
    try {
        
        const deleted = await _function.findByIdAndDelete(req.params._id)
        return res.json("Item deleted")
    } catch (error) {
        console.error(error)
    }
}

export const updatefunction = async (req:Request,res:Response) =>{
    try {
        const validation = await validateFunction(req.body)
        if(!validation.val){
            return res.json(`There was a problem!: ${validation.msg} `)
        }
        const updated= await _function.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json(updated)
    } catch (error) {
        console.log(error)
    }
}