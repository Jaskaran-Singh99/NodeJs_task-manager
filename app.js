const express = require('express');
const app = express()


// require('dotenv').config()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')


app.use(express.json())

app.use('/', tasks);


const port = 4000

const start = async()=>{
    try{
        await connectDB()
        app.listen(port, console.log(`The server is listening to port ${port}`))

    }
    catch(error){
        console.log(error)
    }
}
start()