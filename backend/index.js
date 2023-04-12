require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const Books = require('./routes/api/Book');
const User = require('./routes/api/User');
var cors = require('cors')

//express app
const app = express();
app.use(cors())


//middleware
app.use(express.json())
app.use((req, res, next)=>{
    console.log(req.path, req.method, "<<----")
    next();
})


//routing
app.use('/api/books', Books)
app.use('/api/user', User)

//db connect 
const port = process.env.PORT 
mongoose.set('strictQuery', false);
// mongoose.connect("mongodb://mongo_fitcon:27017/Bookstore")
console.log(process.env.MONGO_URI, "<----process.env.MONGO_URI") 
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(port, () =>
     console.log(`connected to db And Server running on port ${port}`));
})
.catch((error)=>{
console.log(error, "<---error")
})