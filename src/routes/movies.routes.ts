import { Router } from "express";
import {createMovie, deleteMovie, getMovie, getMovies, updateMovie} from "../controllers/moviesController"

const router= Router();

router.get('/',getMovies);

router.get('/:id',getMovie)

router.post('/',createMovie)

router.put('/:id',updateMovie)

router.delete('/:id',deleteMovie)

export default router