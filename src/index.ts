import express from "express"
import dbconnect from "./database"
import "dotenv"

import MovieRouter from "./routes/movies.routes"
import TheaterRouter from "./routes/theaters.routes"
import functionRouter from "./routes/function.routes"

const app= express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

// routes

app.use('/movies',MovieRouter)
app.use('/theaters',TheaterRouter)
app.use('/functions')


// app started

app.set('port',process.env.PORT||4000)
app.listen(app.get('port'),()=>{
    dbconnect()
    console.log("app running at ",app.get('port'))
})