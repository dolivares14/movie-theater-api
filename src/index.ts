import express from "express"
import dbconnect from "./database"
import "dotenv"

import MovieRouter from "./routes/movies.routes"

const app= express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

// routes

app.use('/movies',MovieRouter)


// app started

app.set('port',process.env.PORT||4000)
app.listen(app.get('port'),()=>{
    dbconnect()
    console.log("app running at ",app.get('port'))
})