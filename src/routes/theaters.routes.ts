import { Router } from "express";
import { addTheater, deleteTheater, getTheater, getTheaters, updateTheater } from "../controllers/theaterController";

const router= Router();

// get all theaters
router.get('/',getTheaters)

// get one theater
router.get('/:id',getTheater)

// create a new theater
router.post('/',addTheater)


// delete a theater
router.delete('/:id',deleteTheater)


// update a theater
router.put("/:id",updateTheater)

export default router