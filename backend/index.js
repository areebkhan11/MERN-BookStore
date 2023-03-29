require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const Books = require('./routes/api/Book');

//express app
const app = express();



//middleware
app.use(express.json())
app.use((req, res, next)=>{
    console.log(req.path, req.method, "<<----")
    next();
})


//routing
app.use('/api/books',Books)

//db connect 
const port = process.env.PORT 
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(port, () =>
     console.log(`connected to db And Server running on port ${port}`));
})
.catch((error)=>{
console.log(error, "<---error")
})