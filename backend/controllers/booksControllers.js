const mongoose  = require('mongoose');
const Book = require('../models/Book');

//get all books

const getAllBooks = async(req, res)=>{
    const user_id = req.user._id
    const allBooks = await Book.find({user_id}).sort({createdAt: -1})
    res.status(200).json(allBooks)
}


//get a single book
const getSingleBook = async(req, res)=>{
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error: 'No such book1'})
    }

    const singleBook = await Book.findById(id)
    if(!singleBook){
        return res.status(404).json({error: 'No such book'})
    }

    res.status(200).json(singleBook)
}

//create a new book 
const createNewBook = async(req, res)=>{
        //add doc to db
    const {title, author, description, published_date, publisher } = req.body

    let emptyFields = []

    if(!title){
        emptyFields.push("title")
    }
    if(!author){
        emptyFields.push("author")
    } if(!description){
        emptyFields.push("description")
    } if(!publisher){
        emptyFields.push("publisher")
    }

    if(emptyFields.length > 0 ){
        return res.status(400).json({error:'please fill all fields', emptyFields })  
    }
    

    try{
        const user_id = req.user._id
        const createbook = await Book.create({title, author, description, published_date, publisher, user_id})
        res.status(200).json(createbook)
    }catch(error){
        res.status(400).json({error: error.message })
    }
}

//delete a book
const deleteSingleBook = async(req, res)=>{
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error: 'No such id1'})
    }

    const deleteBook = await Book.findOneAndDelete({_id: id})
    if(!deleteBook){
        return res.status(404).json({error: 'No such id'})
    }

    res.status(200).json(deleteBook)
}

//update a book

const updateSingleBook = async(req, res)=>{
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error: 'No such id1'})
    }

    const updateBook = await Book.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    if(!updateBook){
        return res.status(404).json({error: 'No such id'})
    }

    res.status(200).json(updateBook)
}


module.exports ={
    createNewBook,
    getAllBooks,
    getSingleBook,
    deleteSingleBook,
    updateSingleBook
}