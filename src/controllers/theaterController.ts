import { Request, Response } from "express";
import { request } from "http";
import theater from "../models/theater";


export const getTheaters= async (req:Request,res:Response) =>{
    try {
        const allTheaters= await theater.find()
        return res.json(allTheaters)
    } catch (error) {
        console.log(error)
    }
}

export const getTheater = async (req:Request, res:Response)=>{
    try {
        const searched= await theater.findById(req.params.id)
        return res.json(searched)
    } catch (error) {
        console.error(error)
    }
}

export const addTheater = async (req:Request,res:Response) =>{
    try {
        const {name, capacity,type,movieTheater,working, img}= req.body
        
        const search = await theater.findOne({name})
        if(search)
            return res.status(404).json("Theater already found")
        const newTheater = new theater({
            name,
            capacity, 
            type, 
            movieTheater,
            working,
            img
        })
        const saved = await  newTheater.save()
        return res.json(saved)
    } catch (error) {
        console.error(error)
    }
}

export const deleteTheater= async (req:Request,res:Response) =>{
    try {
        
        const deleted = await theater.findByIdAndDelete(req.params._id)
        return res.json("Item deleted")
    } catch (error) {
        console.error(error)
    }
}

export const updateTheater = async (req:Request,res:Response) =>{
    try {
        const updated= await theater.findByIdAndUpdate(req.params.id,req.body,{new:true})
    } catch (error) {
        console.log(error)
    }
}